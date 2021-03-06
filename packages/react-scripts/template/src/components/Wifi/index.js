import React from "react";
import styled from "styled-components";

import wifiIcon from "./wifi.png";

const Root = styled.div`
  margin: auto 0.625rem;
`;

const Wifi = ({ intensity = 4 }) =>
  <Root>
    {intensity}
    <img src={wifiIcon} alt="wifi" />
  </Root>;

export default Wifi;
