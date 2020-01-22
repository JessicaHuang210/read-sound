import styled from "styled-components";
import { fsNormal, headerBg, fcLight, disabledColor } from "utils/variables";
import { lighten } from "polished";

const InputText = styled.input`
  outline: 0;
  border: 0;
  padding: 1.4rem 1.6rem;
  font-size: ${fsNormal};
  border-radius: 0.5rem;
  width: 100%;
  transition: 0.2s;
  border: 1px solid #fff;
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border-color: ${lighten(0.1, headerBg)};
  }
  &::placeholder {
    color: ${fcLight};
  }
  &:disabled {
    background-color: ${disabledColor};
    border-color: ${disabledColor};
    &::placeholder {
      color: ${lighten(0.2, fcLight)};
    }
  }
`;

export default InputText;
