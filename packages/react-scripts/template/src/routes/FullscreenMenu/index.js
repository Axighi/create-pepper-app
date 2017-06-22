import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const Root = styled(Fullscreen)`
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  min-width: 15rem;
  max-width: 20vw;
  max-height: 35vh;

  & img {
    width: 100%;
  }

  & button {
    color: #fff;
    font-size: 2.25rem
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
