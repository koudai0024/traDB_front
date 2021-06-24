import type { VFC } from "react";
import { Image16x9 } from "src/components/Common/Img";
import styled from "styled-components";

const Wrap = styled.div<{ width: string | undefined }>`
  width: ${(props) => {
    return props.width ? props.width : "100%";
  }};
`;

const Desc = styled.div``;

const Tag = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #374151;
  margin-top: 8px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => {
    return props.theme.colors.black;
  }};
  margin-top: 8px;
`;

const TitleH1 = Title.withComponent("h1");
const TitleH2 = Title.withComponent("h2");
const TitleH3 = Title.withComponent("h3");
const TitleH4 = Title.withComponent("h4");
const TitleH5 = Title.withComponent("h5");
const TitleH6 = Title.withComponent("h6");

export type SimpleCardProps = {
  tag: string;
  title: string;
  image: string;
  titleTag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  width?: string;
};

export const SimpleCard: VFC<SimpleCardProps> = (props) => {
  const IsTagName = () => {
    switch (props.titleTag) {
      case "h1":
        return TitleH1;
      case "h2":
        return TitleH2;
      case "h3":
        return TitleH3;
      case "h4":
        return TitleH4;
      case "h5":
        return TitleH5;
      case "h6":
        return TitleH6;
      default:
        return Title;
    }
  };
  const TitleTag = IsTagName();
  return (
    <Wrap width={props?.width}>
      <Image16x9
        imgSrc={props.image}
        alt={props.tag + "|" + props.title}
        width="100%"
        round={8}
      />
      <Desc>
        <Tag>{props.tag}</Tag>
        <TitleTag>{props.title}</TitleTag>
      </Desc>
    </Wrap>
  );
};
