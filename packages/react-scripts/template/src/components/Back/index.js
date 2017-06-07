import React from "react";

import LeftArrow from "./left-arrow.svg";
import { responseServer } from "../../dispatcher";

const handleClick = () => responseServer({ event: "back" });

const Back = () => (
  <div onClick={handleClick}>
    <img src={LeftArrow} alt="Back" />
  </div>
);

export default Back;
