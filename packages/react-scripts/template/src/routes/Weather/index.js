import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Fullscreen from "../../components/Fullscreen";
import { requireAll } from "../../lib/helpers";

const weatherIcons = requireAll(require.context("./assets/", true, /\.png$/));
const dict = {
  晴: "blue",
  多云: "cloudy",
  阴: "overcast",
  有雨: "rain",
  雪: "snow",
  雾: "fog",
  霜: "frost",
  霾: "haze",
  沙尘暴: "sand"
};

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ highlighted }) => (highlighted ? "blue" : "#FFF")};
  font-size: 30px;
  background:  ${({ highlighted }) => (highlighted ? "black" : "rgba(80, 120, 150, .7)")} ;
`;

const Weather = ({ highlight, days }) => (
  <Fullscreen>
    <Root>
      {days.map((e, i) => (
        <Card key={i} highlighted={highlight === e.date}>
          <img src={weatherIcons[dict[e.weather]]} alt="weahter-icon" />
          <p>{e.date}</p>
          <p>{e.temp_low}</p>
          <p>{e.weather}</p>
          <p>{e.temp_hight}</p>
        </Card>
      ))}
    </Root>
  </Fullscreen>
);

export default connect(state => state.weather)(Weather);
