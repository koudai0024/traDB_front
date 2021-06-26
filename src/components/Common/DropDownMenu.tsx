import type { VFC } from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border-bottom: 2px solid
    ${(props) => {
      return props.theme.colors.black;
    }};
  &:last-child {
    border-bottom: none;
  }
`;

const LabelTagStyle = styled.p`
  background: #3b82f6;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  width: 100%;
  height: 32px;
  padding: 0 0 0 14px;
  position: relative;

  &::before {
    content: "";
    background: #fff;
    display: block;
    width: 14px;
    height: 14px;
    clip-path: polygon(0 0, 100% 0%, 50% 100%);
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%) rotate(0deg);
  }
`;
const LabelTagStyleH1 = LabelTagStyle.withComponent("h1");
const LabelTagStyleH2 = LabelTagStyle.withComponent("h2");
const LabelTagStyleH3 = LabelTagStyle.withComponent("h3");
const LabelTagStyleH4 = LabelTagStyle.withComponent("h4");
const LabelTagStyleH5 = LabelTagStyle.withComponent("h5");
const LabelTagStyleH6 = LabelTagStyle.withComponent("h6");

const List = styled.ul`
  width: 100px;
  padding: 8px 18px;
`;

const Item = styled.li`
  display: inline-block;
  font-size: 14px;
  color: #18181b;
  border-bottom: 2px solid #18181b;
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;

export type DropDownMenuProps = {
  labelTagVariant: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  label: string;
  contents: Array<{
    href: string;
    value: string;
  }>;
};

export const DropDownMenu: VFC<DropDownMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpne = () => {
    const openState = !isOpen;
    setIsOpen(openState);
  };

  const IsLabelTag = () => {
    switch (props.labelTagVariant) {
      case "h1":
        return LabelTagStyleH1;
      case "h2":
        return LabelTagStyleH2;
      case "h3":
        return LabelTagStyleH3;
      case "h4":
        return LabelTagStyleH4;
      case "h5":
        return LabelTagStyleH5;
      case "h6":
        return LabelTagStyleH6;
      default:
        return LabelTagStyle;
    }
  };
  const LabelTag = IsLabelTag();
  return (
    <Wrap>
      <LabelTag onClick={handleOpne}>{props.label}</LabelTag>
      {isOpen && (
        <List>
          {props.contents.map((content) => {
            return (
              <Item key={content.value}>
                <a href={content.href}>{content.value}</a>
              </Item>
            );
          })}
        </List>
      )}
    </Wrap>
  );
};
