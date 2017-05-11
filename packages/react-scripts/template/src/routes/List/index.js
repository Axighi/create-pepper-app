import React from "react";
import Fullscreen from "../../components/Fullscreen";
import { connect } from "react-redux";

const List = ({ title, items }) => (
  <Fullscreen>
    <h1>{title}</h1>
    {items.map((e, i) => (
      <div key={i}>
        {e}
      </div>
    ))}
  </Fullscreen>
);

export default connect(state => state.list)(List);
