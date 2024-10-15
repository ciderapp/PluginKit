import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    "./src/index",
    "./src/mDNS",
    {
      builder: "copy",
      input: "./src/api/ciderapi-types/",
      outDir: "./build/api/ciderapi-types/",
      // loaders: ['vue'],
    },
    {
      builder: "copy",
      input: "./src/vue/",
      outDir: "./build/vue",
      // loaders: ['vue'],
    },
    // mkdist builder transpiles file-to-file keeping original sources structure
    // {
    //   builder: "mkdist",
    //   format: "esm",
    //   input: "./src/api/",
    //   outDir: "./build/api",
    //   // loaders: ['vue'],
    // },
  ],
  externals: ['vue', 'lodash'],
  // Change outDir, default is 'dist'
  outDir: "build",
  failOnWarn: false,
  // Generates .d.ts declaration file
  declaration: true,
});
