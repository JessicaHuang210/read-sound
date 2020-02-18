import styled from "styled-components";
import { headerBg, smallBtnBg, fsMiddle, fcTable } from "utils/variables";
import { darken, lighten } from "polished";

const Button = styled.button`
  padding: 0.7rem ${prop => (prop.small ? "1rem" : "2rem")};
  background-color: ${prop =>
    prop.light ? "#fff" : prop.mute ? "transparent" : headerBg};
  color: ${prop =>
    prop.light ? fcTable : prop.mute ? lighten(0.3, fcTable) : "#fff"};
  font-size: ${prop => (prop.small ? "1.2rem" : fsMiddle)};
  border-radius: 0.4rem;
  outline: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  white-space: nowrap;
  width: ${prop => (prop.block ? "100%" : "")};
  min-height: ${prop => (prop.small ? "3.2rem" : "4rem")};
  transition: 0.2s;
  &:hover {
    background-color: ${prop =>
      prop.mute ? smallBtnBg : prop.light ? "#fafafa" : darken(0.1, headerBg)};
    color: ${prop => (prop.mute ? fcTable : "")};
    transform: translateY(-0.1rem);
  }
  & + button {
    margin-left: 1rem;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
export default Button;
