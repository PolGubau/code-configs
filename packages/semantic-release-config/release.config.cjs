const { createMonorepoReleaseConfig } = require("./index.cjs");

const name = "semantic-release-config";
const srcRoot = `packages/${name}`;
const pkgRoot = `packages/${name}`;

module.exports = createMonorepoReleaseConfig({
	name,
	srcRoot,
	pkgRoot,
});
