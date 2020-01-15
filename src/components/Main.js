import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "components/Container";

const MainC = styled.main`
  min-height: inherit;
  padding: 4rem 0;
`;

class Main extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };
  render() {
    return (
      <MainC>
        <Container>{this.props.children}</Container>
      </MainC>
    );
  }
}

export default Main;
