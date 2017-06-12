import React from "react";
import Fullscreen from "../../components/Fullscreen";
import { connect } from "react-redux";

const FullscreenImage = ({ image_url }) =>
  <Fullscreen>
    <img
      style={{ width: "100%", height: "100%", zIndex: "100" }}
      src={image_url}
      alt=""
    />
  </Fullscreen>;

export default connect(state => state.fullscreenImage)(FullscreenImage);
