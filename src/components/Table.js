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
  state = {
    data: [
      { id: 1, singer: 1, songName: "祢真好", fileName: "祢真好.pdf" },
      {
        id: 2,
        singer: 2,
        songName: "大山為我挪開",
        fileName: "329DWF42.pdf"
      }
    ],
    singerArr: [
      { id: 1, name: "約書亞樂團" },
      { id: 2, name: "讚美之泉" }
    ]
  };
  render() {
    const { singerArr, data } = this.state;
    return (
      <TableC>
        <TbodyC>
          {data.map(i => {
            return (
              <TrC>
                <TdC>{i.songName}</TdC>
                <TdC>
                  {
                    singerArr.find(j => {
                      return j.id === i.singer;
                    }).name
                  }
                </TdC>
                <TdC right>
                  <Button>{i.fileName}</Button>
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
