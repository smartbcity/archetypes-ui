import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import json from "rollup-plugin-json";
import svgr from "@svgr/rollup";
import nodeGlobals from 'rollup-plugin-node-globals';

const getGlobal = (localPackageJson) => {
  const externalsDependencies = Object.keys(
    localPackageJson.dependencies || {}
  ).concat(Object.keys(localPackageJson.peerDependencies || {}));
  return {
    external: externalsDependencies,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
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
      nodeGlobals(),
      typescript(),
      image(),
      json(),
      svgr(),
    ],
  };
};

export default getGlobal;
