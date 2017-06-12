import React from "react";
import { connect } from "react-redux";
import s from "styled-components";

import { responseServer } from "../../dispatcher";

const Content = s.div`
  font-size: 25px;
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 50px;
  padding: 45px 20px;

  & p {
    margin: 0;
  }

  & ul {
    list-style: decimal inside;
    padding: 0;
  }

  & li {
    height: 66px;
    width: 100%;
    background: linear-gradient(to right, #887bd3, #ba7cd3);
    border-radius: 10px;
    line-height: 64px;
    margin: 10px 0;
    padding-left: 20px;
  }
`;

const handleClick = event => () => responseServer({ event });

const Select = ({ title, items }) => (
  <div>
    <Content>
      <p>{title}</p>
      <ul>
        {items.map((e, i) => (
          <li key={i} onClick={handleClick(e.event)}>
            {e.text}
          </li>
        ))}
      </ul>
    </Content>
  </div>
);

export default connect(state => state.select)(Select);
