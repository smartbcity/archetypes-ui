import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import image from '@rollup/plugin-image';
import json from 'rollup-plugin-json';
import svgr from '@svgr/rollup';

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    external: [
      'react',
      'react-dom',
      'react-proptypes'
    ],
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            browser: true
          }),
        commonjs(),
        typescript(),
        image(),
        json(),
        svgr()
    ]
};