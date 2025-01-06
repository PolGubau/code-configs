const { createMonorepoReleaseConfig } = require("@polgubau/semantic-release-config");

const name = "biome";
const srcRoot = `packages/${name}`;
const pkgRoot = `packages/${name}`;

module.exports = createMonorepoReleaseConfig({ name, srcRoot, pkgRoot });
