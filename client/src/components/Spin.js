import React from "react";
import styled from "styled-components";
import { headerBg } from "utils/variables";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SpinC = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: 5rem;
  color: ${headerBg};
`;

const Spin = () => {
  return (
    <SpinC>
      <AiOutlineLoading3Quarters className="icon--rotate" />
    </SpinC>
  );
};

export default Spin;
