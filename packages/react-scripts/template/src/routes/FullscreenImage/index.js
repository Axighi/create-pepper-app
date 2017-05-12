import React from "react";
import Fullscreen from "../../components/Fullscreen";
import { connect } from "react-redux";

const FullscreenImage = ({ image_url }) => (
  <Fullscreen>
    <img src={image_url} alt="" />
  </Fullscreen>
);

export default connect(state => state.fullscreenImage)(FullscreenImage);
