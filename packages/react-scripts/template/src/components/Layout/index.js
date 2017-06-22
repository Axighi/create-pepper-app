import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../Header";
import Wizard from "../Wizard";
import Fullscreen from "../Fullscreen";
import Navbar from "../Navbar";

const Root = styled(Fullscreen)`
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
`;

const Content = styled.div`
  width: 50%;
  font-size: 1.5rem;
  color: #FFF;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

function Layout({ children, status_text, nui_status, battery, wifi }) {
  return (
    <Root>
      <div style={{ width: "100%" }}>
        <Header signalIntensity={wifi} restPower={battery} />
      </div>
      <Main>
        <Wizard spinning={nui_status !== "idle"} text={status_text} />
        <Content>
          {children}
        </Content>
      </Main>
      <Navbar />
    </Root>
  );
}

export default connect(state => state.system)(Layout);
