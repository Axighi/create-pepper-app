import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const Root = styled(Fullscreen)`
  flex-direction: column;

  & h1 {
    margin: 12px;
    color: #FFF;
  }
`;

const Items = styled.div`
  font-size: 25px;
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 40px;
  padding: 10px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 65vh;
  text-align: center;
  width: 80%;
`;

const Item = styled.div`
  height: 50px;
  background: linear-gradient(to right, #887bd3, #ba7cd3);
  border-radius: 10px;
  line-height: 50px;
  margin: 16px;
  box-shadow: 0 10px 15px rgba(232, 106, 76, .85);
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
