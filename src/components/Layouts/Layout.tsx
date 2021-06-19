import type { ReactNode, VFC } from "react";
import { Header } from "src/components/Layouts/Header";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Contents = styled.div`
  width: 100%;
`;

type LayoutProps = {
  children: ReactNode;
};
export const Layout: VFC<LayoutProps> = (props) => {
  return (
    <Wrap>
      <Header />
      <Contents>{props.children}</Contents>
    </Wrap>
  );
};
