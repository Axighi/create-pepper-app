import React from "react";
import { connect } from "react-redux";

const Text = ({ content }) => (
  <div>
    {content}
  </div>
);

export default connect(state => state.text)(Text);
