import fs from "node:fs";
import path from "node:path";
import { compileAsync, SassString } from "sass";
import { optimize } from "svgo";

const DIST_DIR = "dist";
const SRC_DIR = "src";

const allFiles = fs.readdirSync(SRC_DIR, { recursive: true });
const files = allFiles.filter((e) => e.endsWith(".scss"));
const dirs = allFiles.filter((e) => !e.endsWith(".scss"));

function inlineSvg(args) {
	const arg = args[0].assertString("path");
	const fileName = `${arg.toString().replace(/"/g, "")}-symbolic.svg`;
	const filePath = path.join("assets", "icons", fileName);
	const { data } = optimize(fs.readFileSync(filePath));

	return new SassString(
		`url("data:image/svg+xml;${encodeURIComponent(data)}")`,
		{ quotes: false },
	);
}

fs.rmSync(DIST_DIR, { recursive: true });
for (const dir of dirs) {
	fs.mkdirSync(path.join(DIST_DIR, dir), { recursive: true });
}

for (const file of files) {
	const { css } = await compileAsync(path.join(SRC_DIR, file), {
		functions: {
			"svg($path)": inlineSvg,
		},
	}).catch((e) => {
		console.log(e.message);
		process.exit(1);
	});
	// these just get ignored ???????????? fuck off
	if (file === "global/icons.scss" || file === "content/header.scss") {
		console.log(css);
	}
	const filePath = path.join(DIST_DIR, file).replace("scss", "css");

	fs.writeFileSync(filePath, css);
}

fs.writeFileSync(
	path.join(DIST_DIR, "index.css"),
	files.map((e) => `@import "${e.replace("scss", "css")}";`).join("\n"),
);
