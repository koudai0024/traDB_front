/* eslint-disable import/no-default-export */
import type { Meta, Story } from "@storybook/react";

import type { SimpleCardProps } from "./SimpleCard";
import { SimpleCard } from "./SimpleCard";

export default {
  title: "Components/SimpleCard",
  component: SimpleCard,
} as Meta;

export const Primary = () => {
  return (
    <SimpleCard
      tag="大阪府"
      title="大阪城"
      titleTag="h2"
      image="/images/oosakajou.jpeg"
      widthProps="400px"
    />
  );
};

const Template: Story<SimpleCardProps> = (args) => {
  return <SimpleCard {...args} />;
};

export const CenterColorText = Template.bind({});
CenterColorText.args = {
  tag: "大阪府",
  title: "大阪城",
  titleTag: "h2",
  image: "/images/oosakajou.jpeg",
  widthProps: "400px",
};
