import type { VFC } from "react";
import { insertStr } from "src/lib/util/string";
import styled from "styled-components";

const HeadLineText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #18181b;
`;

const HeadLineTextH1 = HeadLineText.withComponent("h1");
const HeadLineTextH2 = HeadLineText.withComponent("h2");
const HeadLineTextH3 = HeadLineText.withComponent("h3");
const HeadLineTextH4 = HeadLineText.withComponent("h4");
const HeadLineTextH5 = HeadLineText.withComponent("h5");
const HeadLineTextH6 = HeadLineText.withComponent("h6");

const AltColor = styled.span<{ color: string | undefined }>`
  color: ${(props) => {
    return props.color
      ? insertStr(props.color.replace("#", ""), 0, "#")
      : "#18181b";
  }};
`;

export type HeadLineProps = {
  variant: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  beforeText?: string;
  altColorText?: string;
  afterText?: string;
  color?: string | "3B82F6" | "EA5532";
};

export const HeadLine: VFC<HeadLineProps> = (props) => {
  const IsTagName = () => {
    switch (props.variant) {
      case "h1":
        return HeadLineTextH1;
      case "h2":
        return HeadLineTextH2;
      case "h3":
        return HeadLineTextH3;
      case "h4":
        return HeadLineTextH4;
      case "h5":
        return HeadLineTextH5;
      case "h6":
        return HeadLineTextH6;
      default:
        return HeadLineText;
    }
  };
  const TagName = IsTagName();
  return (
    <TagName>
      {props.beforeText && props.beforeText}
      {props.altColorText && (
        <AltColor color={props?.color}>{props.altColorText}</AltColor>
      )}
      {props.afterText && props.afterText}
    </TagName>
  );
};
