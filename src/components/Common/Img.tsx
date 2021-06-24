import type { LinkProps } from "next/link";
import Link from "next/link";
import type { VFC } from "react";
import styled from "styled-components";

const Container = styled.div<{ width: string | undefined }>`
  width: ${(props) => {
    return props.width ? props.width : "100%";
  }};
`;

const Inner = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
`;

const ImgWrap = styled.div<{ round: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => {
    return props.round + "px";
  }};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const ImgWrapLink = ImgWrap.withComponent("a");

const Img = styled.img`
  width: 110%;
  height: auto;
`;

type Image16x9Props = {
  imgSrc: string | undefined;
  alt: string;
  width: string | undefined;
  round: number;
};

export type Div = Image16x9Props;

export type Link = Image16x9Props & {
  linkProps: LinkProps;
  target: "_blank" | "_self" | undefined;
};

const isLink = (props: Div | Link): props is Link => {
  return "linkProps" in props;
};

export const Image16x9: VFC<Div | Link> = (props) => {
  const imgSrc = props.imgSrc ? props.imgSrc : "/images/oosakajou.jpeg";
  return (
    <Container width={props?.width}>
      <Inner>
        {isLink(props) ? (
          <Link {...props.linkProps} passHref>
            <ImgWrapLink round={props?.round} target={props?.target}>
              <Img src={props.imgSrc} alt={props.alt} />
            </ImgWrapLink>
          </Link>
        ) : (
          <ImgWrap round={props?.round}>
            <Img src={imgSrc} alt={props.alt} />
          </ImgWrap>
        )}
      </Inner>
    </Container>
  );
};
