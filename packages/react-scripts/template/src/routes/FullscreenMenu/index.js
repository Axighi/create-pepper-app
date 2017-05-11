import React from "react";
import { connect } from "react-redux";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const FullscreenMenu = ({ items }) => (
  <Fullscreen>
    {items.map((e, i) => (
      <div key={i}>
        <img src={e.image_url} alt="menu" />
        <button onClick={() => responseServer({ event: e.event })}>
          {e.text}
        </button>
      </div>
    ))}
  </Fullscreen>
);

export default connect(state => state.fullscreenMenu)(FullscreenMenu);
