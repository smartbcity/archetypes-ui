


## Run

 * Components library
```
yarn workspace @smartb/r2-react-components storybook
```

## Proto

https://share.proto.io/80VK5K/



## Example 
https://design.inrupt.com/atomic-core/?cat=Organisms#Navigation => https://github.com/inrupt/solid-react-components  

https://storybook.js.org/docs/examples/


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
npm install -g create-react-library
create-react-library components

cd r2-react-components
rm -fr .git
npx -p @storybook/cli sb init


yarn storybook
```

## Addons
https://storybook.js.org/addons/
