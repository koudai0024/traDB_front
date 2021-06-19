/* eslint-disable import/no-default-export */
import type { Meta, Story } from "@storybook/react";

import type { InputProps } from "./Input";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  return <Input {...args} />;
};

export const Primary = () => {
  return <Input type="text" />;
};

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "text",
};
