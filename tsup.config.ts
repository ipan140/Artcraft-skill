import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  minify: false,
  sourcemap: true,
  outExtension() {
    return {
      js: ".js",
    };
  },
  banner: {
    js: "#!/usr/bin/env node\n",
  },
});
