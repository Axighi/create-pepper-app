import React from "react";
import Fullscreen from "../../components/Fullscreen";
import { connect } from "react-redux";

const Text = ({ content }) => (
  <Fullscreen>
    {content}
  </Fullscreen>
);

export default connect(state => state.text)(Text);
