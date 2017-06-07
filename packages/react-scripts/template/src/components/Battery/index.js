import React from "react";
import styled from "styled-components";

import batteryIcon from "./battery.svg";

const Root = styled.div`
  display: flex;
  algin-item: center;

  & img {
    margin-left: 5px;
  }
`;

const Battery = ({ rest = 100 }) => (
  <Root>
    <span>{`${rest}%`}</span>
    <img src={batteryIcon} alt="battery" />
  </Root>
);

export default Battery;
