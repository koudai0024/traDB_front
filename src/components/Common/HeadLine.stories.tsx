/* eslint-disable import/no-default-export */
import type { Meta, Story } from "@storybook/react";

import type { HeadLineProps } from "./HeadLine";
import { HeadLine } from "./HeadLine";

export default {
  title: "Components/HeadLine",
  component: HeadLine,
} as Meta;

export const Primary = () => {
  return (
    <HeadLine
      variant="h2"
      color="3B82F6"
      altColorText="見出し"
      afterText="コンポーネント"
    />
  );
};

const Template: Story<HeadLineProps> = (args) => {
  return <HeadLine {...args} />;
};

export const CenterColorText = Template.bind({});
CenterColorText.args = {
  variant: "h2",
  color: "EA5532",
  beforeText: "共通の",
  altColorText: "見出し",
  afterText: "コンポーネント",
};
