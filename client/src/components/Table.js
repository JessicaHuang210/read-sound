import React, { Component } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { fcTable, fcTableTitle, secondaryBg } from "utils/variables";
import Button from "components/Button";
import Link from "components/Link";

const TableC = styled.table`
  width: 100%;
  margin: 2rem 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
const TheadC = styled.thead``;
const TbodyC = styled.tbody``;

const TrC = styled.tr`
  background-color: #fff;
  &:nth-child(even) {
    background-color: ${secondaryBg};
  }
`;

const ThC = styled.th`
  padding: 2rem;
  text-align: ${prop => (prop.right ? "right" : "center")};
  border-bottom: 1px solid #eee;
`;
const TdC = styled.td`
  color: ${prop => (prop.head ? fcTableTitle : fcTable)};
  padding: 2rem;
  text-align: ${prop => (prop.right ? "right" : "center")};
`;

class Table extends Component {
  static propTypes = {
    data: PropTypes.array,
    onDetailClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    onSingerClick: PropTypes.func,
    onAlbumClick: PropTypes.func,
    readOnly: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    data: [],
    onDetailClick: () => {
      return null;
    },
    onDeleteClick: () => {
      return null;
    },
    onSingerClick: () => {
      return null;
    },
    onAlbumClick: () => {
      return null;
    },
    readOnly: false,
    children: null
  };
  render() {
    const { data, readOnly } = this.props;
    return (
      <TableC>
        <TheadC>
          <TrC>
            <ThC>編號</ThC>
            <ThC>歌名</ThC>
            <ThC>歌手</ThC>
            <ThC>專輯</ThC>
            {readOnly ? null : <ThC></ThC>}
          </TrC>
        </TheadC>
        <TbodyC>
          {data.map((i, index) => {
            return (
              <TrC key={i._id}>
                <TdC>{index + 1}</TdC>
                <TdC head>{i.name}</TdC>
                <TdC>
                  <Link onClick={() => this.props.onSingerClick(i.singer)}>
                    {i.singer}
                  </Link>
                </TdC>
                <TdC>
                  <Link onClick={() => this.props.onAlbumClick(i.album)}>
                    {i.album}
                  </Link>
                </TdC>
                {readOnly ? null : (
                  <TdC right>
                    <Button mute small>
                      下載
                    </Button>
                    <Button
                      mute
                      small
                      onClick={() => this.props.onDeleteClick(i._id)}
                    >
                      刪除
                    </Button>
                    <Button
                      mute
                      small
                      onClick={() => this.props.onDetailClick(i._id)}
                    >
                      明細
                    </Button>
                  </TdC>
                )}
              </TrC>
            );
          })}
        </TbodyC>
      </TableC>
    );
  }
}

export default Table;
