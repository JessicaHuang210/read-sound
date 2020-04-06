import styled from "styled-components";
import { fsNormal, headerBg, fcLight, disabledColor } from "utils/variables";

const InputSelect = styled.select`
  outline: 0;
  border: 0;
  background-color: #fff;
  font-size: ${fsNormal};
  border-radius: 0.5rem;
  width: 100%;
  transition: 0.2s;
  border: 1px solid #fff;
`;

export default InputSelect;
