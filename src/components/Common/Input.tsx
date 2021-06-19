import type { VFC } from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  background: #f4f4f5;
  width: 100%;
  font-size: 16px;
  color: #3f3f46;
  border: 1px solid #d4d4d8;
  border-radius: 8px;
  padding: 8px 16px;
  box-sizing: border-box;
`;

export type InputProps = {
  type: string;
  placeholder?: string;
  className?: string;
};

export const Input: VFC<InputProps> = (props) => {
  return (
    <InputBlock
      className={props?.className || ""}
      type={props.type}
      placeholder={props?.placeholder || ""}
    />
  );
};
