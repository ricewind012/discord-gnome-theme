import fs from "node:fs";
import path from "node:path";
import * as sass from "sass";

const allFiles = fs.readdirSync("src", { recursive: true });
const files = allFiles.filter((e) => e.endsWith(".scss"));
const dirs = allFiles.filter((e) => !e.endsWith(".scss"));

fs.rmSync("dist", { recursive: true });
for (const dir of dirs) {
	fs.mkdirSync(path.join("dist", dir), { recursive: true });
}

for (const file of files) {
	const { css } = sass.compile(path.join("src", file));
	const filePath = path.join("dist", file).replace("scss", "css");

	fs.writeFileSync(filePath, css);
}

fs.writeFileSync(
	path.join("dist", "index.css"),
	files.map((e) => `@import "${e.replace("scss", "css")}";`).join("\n"),
);
