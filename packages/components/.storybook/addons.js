import addons from "@storybook/addons";

setTimeout(() => {
  addons.elements.panel["storybookjs/knobs/panel"].title = "Props";
  addons.elements.panel["storybook/actions/panel"].title = "Events";
}, 0);