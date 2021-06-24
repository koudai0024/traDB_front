import type { ReactNode, VFC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-bottom: 2px solid #d1d5db;
  padding: 0 0 16px;
`;

export type InnerProps = {
  children: ReactNode;
};
export const Inner: VFC<InnerProps> = (props) => {
  return <Container>{props.children}</Container>;
};
