import React from "react";
import styled from "styled-components";

import logoIcon from "./assets/logo.png";
import Wifi from "../Wifi";
import Battery from "../Battery";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  width: 90%;
  color: #FFF;
  margin: auto;
  border-bottom: 1px solid #FFF;
  font-size: 25px;
  font-weight: lighter;
`;

const Logo = styled.div`
  display: flex;
  algin-item: center;

  & span {
    margin-left: 10px;
  }
`;

const Status = styled.div`
  display: flex;
  algin-item: center;
`;

const Header = ({ signalIntensity, restPower }) =>
  <Root>
    <Logo>
      <img src={logoIcon} alt="logo" />
      <span>包头农商行</span>
    </Logo>
    <Status>
      <Wifi intensity={signalIntensity} />
      <Battery rest={restPower} />
    </Status>
  </Root>;

export default Header;
