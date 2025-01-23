import fs from "node:fs";
import path from "node:path";
import * as sass from "sass";

const DIST_DIR = "dist";
const SRC_DIR = "src";

const allFiles = fs.readdirSync(SRC_DIR, { recursive: true });
const files = allFiles.filter((e) => e.endsWith(".scss"));
const dirs = allFiles.filter((e) => !e.endsWith(".scss"));

fs.rmSync(DIST_DIR, { force: true, recursive: true });
for (const dir of dirs) {
	fs.mkdirSync(path.join(DIST_DIR, dir), { recursive: true });
}

for (const file of files) {
	const { css } = await sass
		.compileAsync(path.join(SRC_DIR, file))
		.catch((e) => {
			console.log(e.message);
			process.exit(1);
		});
	const filePath = path.join(DIST_DIR, file).replace("scss", "css");

	fs.writeFileSync(filePath, css);
}

fs.writeFileSync(
	path.join(DIST_DIR, "index.css"),
	files.map((e) => `@import "${e.replace("scss", "css")}";`).join("\n"),
);
