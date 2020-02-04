import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { headerBg } from "utils/variables";
import { darken, lighten } from "polished";
import { Container } from "components/Container";
import { H3 } from "components/Typography";
import { IconContext } from "react-icons";
import { IoIosMenu, IoMdSearch, IoMdAdd } from "react-icons/io";

const HeaderC = styled.header`
  min-height: 6rem;
  display: flex;
  background: ${headerBg};
  color: #fff;
  position: sticky;
  top: 0;
`;

const MenuBtnC = styled.button`
  position: fixed;
  left: 0.2rem;
  top: 0.2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  color: #fff;
  width: 45px;
  height: 45px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s;
  &:hover {
    background-color: ${darken(0.1, headerBg)};
    transform: translateY(-0.1rem);
  }
`;
const SidebarOverlayC = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  &.active {
    position: fixed;
  }
`;
const SidebarC = styled.nav`
  position: absolute;
  background-color: ${lighten(0.3, headerBg)};
  padding: 2rem 0rem;
  height: 100%;
  overflow-y: auto;
  transition: 0.2s;
  transform: translateX(-100%);
  &.active {
    transform: translateX(0);
  }
`;

const NavC = styled.ul`
  width: 20rem;
`;
const NavItemC = styled.li`
  display: block;
  padding: 2rem 4rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${lighten(0.4, headerBg)};
  }
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: true
    };
  }

  handleMenuBtnClick = () => {
    this.setState({
      menuActive: true
    });
  };

  handleOverlayClick = () => {
    this.setState({
      menuActive: false
    });
  };

  render() {
    const { menuActive } = this.state;
    return (
      <Fragment>
        <IconContext.Provider
          value={{
            size: "18",
            style: { verticalAlign: "text-bottom", marginRight: "0.5rem" }
          }}
        >
          <SidebarOverlayC
            onClick={this.handleOverlayClick}
            className={menuActive ? "active" : ""}
          >
            <SidebarC
              onClick={e => {
                e.stopPropagation();
              }}
              className={menuActive ? "active" : ""}
            >
              <NavC>
                <NavItemC>
                  <IoMdAdd />
                  新增
                </NavItemC>
                <NavItemC>
                  <IoMdSearch />
                  分類查詢
                </NavItemC>
              </NavC>
            </SidebarC>
          </SidebarOverlayC>
          <HeaderC>
            <Container>
              <MenuBtnC onClick={this.handleMenuBtnClick}>
                <IoIosMenu />
              </MenuBtnC>
              <H3 onClick={() => this.props.history.push({ pathname: "/" })}>
                RRR
              </H3>
            </Container>
          </HeaderC>
        </IconContext.Provider>
      </Fragment>
    );
  }
}

export default withRouter(Header);
