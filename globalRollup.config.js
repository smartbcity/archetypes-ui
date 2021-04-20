import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import json from "rollup-plugin-json";
import svgr from "@svgr/rollup";

const globalPackageJson = require("../../package.json");

const getGlobal = (localPackageJson) => {
  const externalsDependencies = Object.keys(
    globalPackageJson.dependencies || {}
  )
    .concat(Object.keys(globalPackageJson.peerDependencies || {}))
    .concat(Object.keys(localPackageJson.dependencies || {}))
    .concat(Object.keys(localPackageJson.peerDependencies || {}));
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
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript(),
      image(),
      json(),
      svgr(),
    ],
  };
};

export default getGlobal;
