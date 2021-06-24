import type { ReactNode, VFC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
  box-sizing: border-box;
`;

export type ContainerProps = {
  children: ReactNode;
};

export const Container: VFC<ContainerProps> = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};
