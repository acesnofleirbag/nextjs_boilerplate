import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Boilerplate/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
   args: {
      label: "Button"
   }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "amaranth",
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
   outline: true
}

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
   backgroundColor: "amaranth",
   outline: true
}
