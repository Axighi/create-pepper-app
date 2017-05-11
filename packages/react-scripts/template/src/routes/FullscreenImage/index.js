import React from "react";
import Fullscreen from "../../components/Fullscreen";
import { connect } from "react-redux";

const FullscreenImage = ({ url }) => (
  <Fullscreen>
    <img src={url} alt="" />
  </Fullscreen>
);

export default connect(state => state.fullscreenImage)(FullscreenImage);
