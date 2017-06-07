import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const Root = styled(Fullscreen)`
  justify-content: space-around;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px;

  & img {
    width: 200px;
    height: 200px;
  }

  & button {
    color: #fff;
    font-size: 36px;
  }
`;

const FullscreenMenu = ({ items }) =>
  <Root>
    {items.map((e, i) =>
      <MenuItem key={i}>
        <img src={e.image_url} alt="menu" />
        <button onClick={() => responseServer({ event: e.event })}>
          {e.text}
        </button>
      </MenuItem>
    )}
  </Root>;

export default connect(state => state.fullscreenMenu)(FullscreenMenu);
