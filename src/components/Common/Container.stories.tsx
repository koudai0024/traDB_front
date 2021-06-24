/* eslint-disable import/no-default-export */
import type { Meta } from "@storybook/react";

import { Container } from "./Container";
import { Inner } from "./Inner";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

export const Primary = () => {
  return (
    <Container>
      <h1>hello</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nulla
        distinctio incidunt voluptatem, beatae illum ratione facilis. Eveniet
        omnis vel atque quam similique doloribus pariatur nulla laudantium sint
        soluta! Necessitatibus.
      </p>
    </Container>
  );
};

export const InInner = () => {
  return (
    <Container>
      <Inner>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          nulla distinctio incidunt voluptatem, beatae illum ratione facilis.
          Eveniet omnis vel atque quam similique doloribus pariatur nulla
          laudantium sint soluta! Necessitatibus.
        </p>
      </Inner>
    </Container>
  );
};
