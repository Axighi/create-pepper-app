import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const Root = styled(Fullscreen)`
  flex-direction: column;

  & h1 {
    margin: 0.75rem;
    color: #FFF;
  }
`;

const Items = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  letter-spacing: 0.125rem;
  line-height: 2.5rem;
  padding: 0.625rem;
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
  height: 3.125rem;
  background: linear-gradient(to right, #887bd3, #ba7cd3);
  border-radius: 0.625rem;
  line-height: 2.5rem;
  margin: 1rem;
  box-shadow: 0 0.625rem 1rem rgba(232, 106, 76, .85);
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
