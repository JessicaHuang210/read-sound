import styled from "styled-components";

export const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 3rem;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  flex-grow: 1;
  & + div {
    margin-left: 1rem;
  }
`;

export const FormAction = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex: 1 1 auto;
`;
