import fs from "node:fs";
import path from "node:path";
import yargs from "yargs";
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

/** @type {import("postcss-load-config").Config} */
export default {
	map: false,
	parser: postcssSassParser,
	plugins: [
		postcssSassPlugin({
			silenceDeprecations: ["legacy-js-api"],
		}),
	],
};
