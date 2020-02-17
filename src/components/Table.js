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

const TbodyC = styled.tbody``;

const TrC = styled.tr`
  background-color: #fff;
  &:nth-child(even) {
    background-color: ${secondaryBg};
  }
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
    children: null
  };
  render() {
    const { data } = this.props;
    return (
      <TableC>
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
                <TdC>{i.album || "-"}</TdC>
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
              </TrC>
            );
          })}
        </TbodyC>
      </TableC>
    );
  }
}

export default Table;
