import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: purple;
  color: #FFF;
`;

const Home = ({ nui_status, status_text }) => (
  <Root>
    <h1> Hello, I 'm Pepper!</h1>
  </Root>
);

export default connect(state => state.system)(Home);
