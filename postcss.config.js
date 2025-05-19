import fs from "node:fs";
import path from "node:path";
import yargs from "yargs";
import postcssFunctions from "postcss-functions";
import postcssSassParser from "postcss-scss";
import postcssSassPlugin from "@csstools/postcss-sass";

// Generate an index.css file that imports everything
const { argv } = yargs(process.argv);
const files = fs
	.readdirSync(argv.base, { recursive: true })
	.filter((e) => e.endsWith(".scss"));
const content = files
	.map((e) => `@import "${e.replace("scss", "css")}";`)
	.join("\n");
fs.writeFileSync(path.join(argv.dir, "index.css"), content);

const unquote = (str) => str.replace(/"/g, "");

/**
 * `icon("name")` => `url("data:image/svg+xml;base64,${base64}")`
 *
 * @param {string} name File name without the extension.
 * @param {string} category Icon category. Defaults to "symbolic", since most of
 * them are symbolic.
 */
function icon(name, category = "symbolic") {
	// biome-ignore lint/style/noParameterAssign: quoted in scss
	name = unquote(name);
	// biome-ignore lint/style/noParameterAssign: quoted in scss
	category = unquote(category);

	// fuck you whoever thought it had to end with "-symbolic" only for symbolic
	// icons, even though it had a separate directory for said icons... no, I am
	// not renaming them
	const fileEnding = category === "symbolic" ? "-symbolic" : "";
	const fileName = `${name}${fileEnding}.svg`;
	const file = path.join("assets", "icons", category, fileName);
	const base64 = fs.readFileSync(file, { encoding: "base64" });

	return `url("data:image/svg+xml;base64,${base64}")`;
}

const appendImportantPlugin = (opts) => (css) => {
	const NOT_IMPORTANT_MATCH = / notimportant$/;

	css.walkRules((rule) => {
		const nodes = rule.nodes.filter(
			(node) =>
				node.type !== "comment" &&
				!opts.filter.some((sel) => node.parent.selectors.includes(sel)),
		);
		for (const node of nodes) {
			if (node.value.match(NOT_IMPORTANT_MATCH)) {
				node.value = node.value.replace(NOT_IMPORTANT_MATCH, "");
				continue;
			}

			node.important = true;
		}
	});
};
appendImportantPlugin.postcss = true;

/** @type {import("postcss-load-config").Config} */
export default {
	map: false,
	parser: postcssSassParser,
	plugins: [
		postcssFunctions({
			functions: {
				icon,
			},
		}),
		postcssSassPlugin({
			silenceDeprecations: ["legacy-js-api", "mixed-decls"],
			includePaths: ["src/mixins"],
		}),
		appendImportantPlugin({
			filter: [":root"],
		}),
	],
};
