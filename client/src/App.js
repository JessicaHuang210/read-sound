import React, { Fragment } from "react";
import { ResetStyle, GlobalStyle, Wrap } from "components/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Routs from "router";
import Header from "components/Header";
import Main from "components/Main";
function App() {
  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />
      <Router>
        <Wrap>
          <Header />
          <Main>
            <Routs />
          </Main>
        </Wrap>
      </Router>
    </Fragment>
  );
}

export default App;
