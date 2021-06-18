# Archetypes-ui libraries

![](https://badgen.net/badge/React/16.13.1/purple)
![](https://badgen.net/badge/@material-ui/4.11.3/green)
[![](https://badgen.net/npm/v/@smartb/archetypes-ui-layout/latest)](https://www.npmjs.com/package/@smartb/archetypes-ui-components)
![](https://badgen.net/npm/types/tslib)

## 📦 Install

```bash
npm install @smartb/archetypes-ui-components
npm install @smartb/archetypes-ui-documentation
npm install @smartb/archetypes-ui-layout
npm install @smartb/archetypes-ui-forms
npm install @smartb/archetypes-ui-theme
npm install @smartb/archetypes-ui-s2
```

```bash
yarn add @smartb/archetypes-ui-components
yarn add @smartb/archetypes-ui-documentation
yarn add @smartb/archetypes-ui-layout
yarn add @smartb/archetypes-ui-forms
yarn add @smartb/archetypes-ui-theme
yarn add @smartb/archetypes-ui-s2
```

## 🧰 The contents

Almost every components are based on [Material-ui](https://material-ui.com/).

- @smartb/archetypes-ui-components regroups basic components to build an application like button, card, panel etc...

- @smartb/archetypes-ui-forms regroups the components to build a complete form like text-fields, select etc...

- @smartb/archetypes-ui-layout regroups complexe layouts to structure an application like nav-bar, steppers, tools-menu etc...

- @smartb/archetypes-ui-theme regroups providers and hooks to use our theme and the material-ui theme in the application.

- @smartb/archetypes-ui-s2 regroups components to work with Smartb's tools.

## 🌈 Override styles

There is a `theme provider` component in @smartb/archetypes-ui-components that has to include the app.

You have to give it a theme that you can get and customise [here](/?path=/story/overview-cheatsheet-theme--page). And you can also give it a [material-ui theme](https://material-ui.com/customization/default-theme/) to override the material-ui default properties.

Every components and layouts will have the following props to easily override their default styles:

- `className` to give a class to the root of the component.
- `style` to give custom styles to the root of the component.
- `classes` An object regrouping all the classes you can give to the different parts of a component.
- `styles` An object regrouping all the custom styles you can give to the different parts of a component.

Each part of a component also has a unique class construct like that: `"Arui" + /*the name of the component*/ + "-" + /*the name of the part of the component*/`.

For Example: `AruiCard-root`.

These classes allows you to override the default css properties from a static css file.

## ⛏ Source

- Build

```
yarn workspaces run build
```

- Run Storybook

```
yarn storybook
```

- Release Version

```
lerna version 0.0.1 --no-git-tag-version

lerna publish from-package
```

- Create new package

```
cd packages
create-react-library COMPONENT_NAME
```
