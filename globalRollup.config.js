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
  const globals = {
    react: "React",
    "react-dom": "ReactDOM",
  };
  return {
    external: [...externalsDependencies, "@material-ui/styles"],
    output: [
      {
        file: localPackageJson.main,
        globals: globals,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: localPackageJson.module,
        globals: globals,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
        extensions: [".mjs", ".js", ".jsx", ".json", ".node", ".tsx", ".ts"],
      }),
      commonjs({
        include: /\/node_modules\//,
      }),
      typescript({
        exclude: [
          "@smartb/archetypes-ui-layout",
          "@smartb/archetypes-ui-themes",
          "@smartb/archetypes-ui-themes",
          "@smartb/archetypes-ui-s2",
          "@smartb/archetypes-ui-providers",
          "@smartb/archetypes-ui-forms",
          "@smartb/archetypes-ui-documentation",
          "@smartb/archetypes-ui-components",
        ],
      }),
      image(),
      json(),
      svgr(),
    ],
  };
};

export default getGlobal;
