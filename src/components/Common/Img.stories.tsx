/* eslint-disable import/no-default-export */
import type { Meta, Story } from "@storybook/react";

import type { Div, Link } from "./Img";
import { Image16x9 } from "./Img";

export default {
  title: "Components/Image16x9",
  component: Image16x9,
} as Meta;

export const Primary = () => {
  return (
    <Image16x9
      round={0}
      width="400px"
      alt="demo"
      imgSrc="/images/oosakajou.jpeg"
    />
  );
};

const Template: Story<Div | Link> = (args) => {
  return <Image16x9 {...args} />;
};

export const LinkImage = Template.bind({});
LinkImage.args = {
  alt: "リンク付き画像",
  linkProps: {
    href: "https://www.google.com/",
  },
  target: "_blank",
  imgSrc: "/images/oosakajou.jpeg",
  width: "300px",
  round: 8,
};

export const DivImage = Template.bind({});
DivImage.args = {
  alt: "リンクなし画像",
  imgSrc: "",
  width: "300px",
  round: 8,
};
