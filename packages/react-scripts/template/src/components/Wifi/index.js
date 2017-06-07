import React from "react";
import styled from "styled-components";

import wifiIcon from "./wifi.png";

const Root = styled.div`
  margin: auto 10px;
`;

const Wifi = ({ intensity = 4 }) => (
  <Root>
    {intensity}
    <img src={wifiIcon} alt="wifi" />
  </Root>
);

export default Wifi;
