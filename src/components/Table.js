import React, { Component } from "react";
import styled from "styled-components";
import { fcTable, secondaryBg } from "utils/variables";
import Button from "components/Button";
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
  color: ${fcTable};
  padding: 2rem;
  text-align: ${props => (props.right ? "right" : "center")};
`;

class Table extends Component {
  render() {
    return (
      <TableC>
        <TbodyC>
          <TrC>
            <TdC>0000</TdC>
            <TdC right>
              <Button>xxx.pdf</Button>
            </TdC>
          </TrC>
          <TrC>
            <TdC>0000</TdC>
            <TdC right>
              <Button>xxx.pdf</Button>
            </TdC>
          </TrC>
        </TbodyC>
      </TableC>
    );
  }
}

export default Table;
