import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Fullscreen from "../../components/Fullscreen";

const Root = styled(Fullscreen)`
  flex-direction: column;
`;

const Home = ({ nui_status, status_text }) =>
  <Root>
    <h1> Hello, I 'm Pepper!</h1>
  </Root>;

export default connect(state => state.system)(Home);
