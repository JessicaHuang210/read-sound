import React, { Component } from "react";
import styled from "styled-components";
import { headerBg } from "utils/variables";
import { Container } from "components/Container";
import { H3 } from "components/Typography";

const HeaderC = styled.header`
  min-height: 6rem;
  display: flex;
  background: ${headerBg};
  color: #fff;
  position: sticky;
  top: 0;
`;

class Header extends Component {
  render() {
    return (
      <HeaderC>
        <Container>
          <H3>RRR</H3>
        </Container>
      </HeaderC>
    );
  }
}

export default Header;
