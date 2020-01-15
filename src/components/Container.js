import styled from "styled-components";
import { device, size } from "utils/variables";
export const Container = styled.div`
  margin: auto;
  padding: 0 2rem;
  @media ${device.laptop} {
    max-width: ${size.tabletL};
  }
`;
