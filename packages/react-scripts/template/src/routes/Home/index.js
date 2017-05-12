import React from "react";
import styled from "styled-components";
import Wizard from "../../components/Wizard";
import { connect } from "react-redux";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: purple;
`;

const Home = ({ nui_status, status_text }) => (
  <Root>
    <h1> Hello, I 'm Pepper!</h1>
    <Wizard spinning={nui_status !== "idle"} text={status_text} />
  </Root>
);

export default connect(state => state.system)(Home);
