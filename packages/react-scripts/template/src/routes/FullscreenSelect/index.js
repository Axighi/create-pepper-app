import React from "react";
import { connect } from "react-redux";
import s from "styled-components";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const Root = s(Fullscreen)`
  flex-direction: column;

  & h1 {
    margin: 12px;
    color: #FFF;
  }
`;

const Items = s.div`
  font-size: 25px;
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 40px;
  padding: 10px;
  color: #FFF;
`;

const Item = s.div`
  height: 50px;
  width: 100%;
  background: linear-gradient(to right, #887bd3, #ba7cd3);
  border-radius: 10px;
  line-height: 50px;
  margin: 16px 0;
  box-shadow: 0 10px 15px rgba(232, 106, 76, .85);
  padding-left: 20px;
`;

const handleClick = event => () => responseServer({ event });

const FullscreenSelect = ({ title, items }) =>
  <Root>
    <h1>{title}</h1>
    <Items>
      {items.map((e, i) =>
        <Item key={i} onClick={handleClick(e.event)}>
          {e.text}
        </Item>
      )}
    </Items>
  </Root>;

export default connect(state => state.fullscreenSelect)(FullscreenSelect);
