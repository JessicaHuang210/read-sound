import styled from "styled-components";

export const FormWrap = styled.div`
  max-width: ${prop => (prop.width ? prop.width + "px" : "100%")};
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: auto;
  margin-bottom: 3rem;

  & div:not(:first-child) {
    margin-left: ${prop => (prop.inline ? "1rem" : "")};
  }
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

export const FormLabel = styled.label`
  margin-right: 1rem;
  min-width: 7rem;
`;

export const FormAction = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex: 1 1 auto;
`;
