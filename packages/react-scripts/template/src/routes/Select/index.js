import React from "react";
import { connect } from "react-redux";

import Fullscreen from "../../components/Fullscreen";
import { responseServer } from "../../dispatcher";

const Select = ({ title, items }) => (
  <Fullscreen>
    <h1>{title}</h1>
    {items.map((e, i) => (
      <div key={i} onClick={() => responseServer({ event: e.event })}>
        {e.text}
      </div>
    ))}
  </Fullscreen>
);

export default connect(state => state.select)(Select);
