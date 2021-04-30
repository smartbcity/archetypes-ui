import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import json from "rollup-plugin-json";
import svgr from "@svgr/rollup";
import babel from 'rollup-plugin-babel';

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
        extensions: ['.mjs', '.js', '.jsx', '.json', '.node', '.tsx', '.ts']
      }),
      commonjs({
        include: /\/node_modules\//,
        esmExternals: false,
        requireReturnsDefault: 'namespace',
        ignoreGlobal: true,
      }),
      babel({
        exclude: /node_modules/,
        // We are using @babel/plugin-transform-runtime
        runtimeHelpers: true,
        babelrc: true
      }),
      typescript(),
      image(),
      json(),
      svgr(),
    ],
  };
};

export default getGlobal;
