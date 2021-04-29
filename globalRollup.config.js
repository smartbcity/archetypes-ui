import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import json from "rollup-plugin-json";
import svgr from "@svgr/rollup";

const getGlobal = (localPackageJson) => {
  const externalsDependencies = Object.keys(
    localPackageJson.dependencies || {}
  ).concat(Object.keys(localPackageJson.peerDependencies || {}));
  return {
    external: externalsDependencies,
    output: [
      {
        file: localPackageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: localPackageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.mjs', '.js', '.jsx', '.json', '.node']
      }),
      commonjs({
        include: /\/node_modules\//,
        esmExternals: false,
        requireReturnsDefault: 'namespace',
      }),
      typescript(),
      image(),
      json(),
      svgr(),
    ],
  };
};

export default getGlobal;
