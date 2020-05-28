## Build

```
yarn workspaces run build
```

## Run

- Components library

```
yarn workspace @smartb/r2-storybook storybook
```

## Proto

https://share.proto.io/80VK5K/

## Example

- Use Both CSF and Docs

```
Source: https://github.com/appnexus/lucid
Demo: https://appnexus.github.io/lucid/?path=/docs/* =>
```

```
Source: https://github.com/necolas/react-native-web
Demo: https://necolas.github.io/react-native-web/docs/?path=/docs/components-button--color
```

```
Source: https://github.com/jask-oss/reaviz
Demo: https://reaviz.io/?path=/docs/docs-intro--page
```

- Pages Organization

```
Source: https://github.com/wix/wix-style-react
Demo: https://wix-style-react.now.sh/?path=/story/introduction-cheatsheet--components-cheatsheet
```

- Pages Style

```
Source: https://github.com/thorjarhun/react-storybook-todolist
Demo: https://thorjarhun.github.io/react-storybook-todolist/
```

- Nice Design

```
Source: https://github.com/inrupt/solid-react-components
Demo: https://design.inrupt.com/atomic-core/?cat=Organisms#Navigation =>
```

## Version

```
lerna version 0.0.1 --no-git-tag-version
```

## Init Project

Based on:
https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli

```
git init r2-react
cd r2-react

yarn init r2-react
yarn add lerna -D
yarn lerna init

vim package.json

"workspaces": [
  "packages/*"
],
"npmClient": "yarn",
"useWorkspaces": true,


cd packages
create-react-library components
npm install -g create-react-library

cd r2-react-components
rm -fr .git
npx -p @storybook/cli sb init


yarn storybook
```

## Create new package

```
cd packages
create-react-library COMPONENT_NAME
```

## Addons

https://storybook.js.org/addons/
