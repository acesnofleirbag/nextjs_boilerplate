import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from ".";

export default {
   title: "Boilerplate/Header",
   component: Header,
   argTypes: {
      backgroundColor: { control: "color" }
   }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
   <Header {...args} />
)

export const Primary = Template.bind({});
