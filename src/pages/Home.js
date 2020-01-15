import React, { Component, Fragment } from "react";
import { H3 } from "components/Typography";
import Table from "components/Table";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <H3>resent item</H3>
        <Table></Table>
      </Fragment>
    );
  }
}

export default Home;
