/* eslint-disable import/no-default-export */
import type { Meta, Story } from "@storybook/react";

import type { DropDownMenuProps } from "./DropDownMenu";
import { DropDownMenu } from "./DropDownMenu";

export default {
  title: "Components/DropDownMenu",
  component: DropDownMenu,
} as Meta;

export const Primary = () => {
  return (
    <DropDownMenu
      labelTagVariant="h2"
      label="近畿"
      contents={[
        {
          href: "/",
          value: "三重県",
        },
      ]}
    />
  );
};

const Template: Story<DropDownMenuProps> = (args) => {
  return <DropDownMenu {...args} />;
};

export const Menu = Template.bind({});
Menu.args = {
  labelTagVariant: "h2",
  label: "近畿",
  contents: [
    {
      href: "/",
      value: "三重県",
    },
  ],
};
