import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { requireAll } from "../../lib/helpers";
import bg from "./assets/background.png";

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
  height: 100vh;
  background: url(${bg}) no-repeat;
  background-size: cover;
`;

const Card = styled.div`
  border-radius: 1rem;
  width: 13.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: lighter;
  align-items: center;
  color: ${({ highlighted }) => (highlighted ? "rgb(78, 195, 255)" : "#FFF")};
  background:  ${({ highlighted }) =>
    highlighted ? "rgba(35, 44, 56, .85)" : "rgba(35, 44, 56, .5)"} ;
  overflow: hidden;

  & h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #FFF;
    background: ${props => (props.highlighted ? "#27303c" : "#545e69")};
    margin: 0;
    height: 3.75rem;
  }

  & img {
    margin: 1.5rem;
    transform: scale(${props => (props.highlighted ? 1.3 : 1)});
  }
`;

const Info = styled.div`
  text-align: center;

  & p {
     margin: 1rem 0;
  }

  & p:nth-child(1) {
    font-size: 1.875rem;
  }

  & p:nth-child(2) {
    font-size: 1.875rem;
  }

  & p:nth-child(3) {
    font-size: 1.5rem;
  }

  & p:nth-child(4) {
    font-size: 1.25rem;
  }
`;

const Weather = ({ highlight, days }) =>
  <Root>
    {days.map((e, i) =>
      <Card key={i} highlighted={highlight === e.date}>
        <img src={weatherIcons[dict[e.weather]]} alt="weahter-icon" />
        <Info>
          <p>{`${e.temp_low}-${e.temp_high}℃`}</p>
          <p>{e.weather}</p>
          <p>{e.date}</p>
          <p>{e.week}</p>
        </Info>
        <h2>{e.city}</h2>
      </Card>
    )}
  </Root>;

export default connect(state => state.weather)(Weather);
