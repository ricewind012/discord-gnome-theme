import fs from "node:fs";
import path from "node:path";
import yargs from "yargs";
import postcssFunctions from "postcss-functions";
import postcssSassParser from "postcss-scss";
import postcssSassPlugin from "@csstools/postcss-sass";

/**
 * `icon("name")` => `url("data:image/png;base64,${base64}")`
 *
 * @param {string} name File name without the extension.
 */
function icon(name) {
	const fileName = `${name.replace(/"/g, "")}-symbolic.svg`;
	const file = path.join("assets", "icons", fileName);
	const base64 = fs.readFileSync(file, { encoding: "base64" });

	return `url("data:image/svg+xml;base64,${base64}")`;
}

// Generate an index.css file that imports everything
const { argv } = yargs(process.argv);
const files = fs
	.readdirSync(argv.base, { recursive: true })
	.filter((e) => e.endsWith(".scss"));
const content = files
	.map((e) => `@import "${e.replace("scss", "css")}";`)
	.join("\n");
fs.writeFileSync(path.join(argv.dir, "index.css"), content);

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
			silenceDeprecations: ["legacy-js-api"],
		}),
	],
};
