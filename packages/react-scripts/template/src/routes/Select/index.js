import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { responseServer } from "../../dispatcher";

const Content = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  letter-spacing: 0.125rem;
  line-height: 3.125rem;
  padding: 2.8125rem 1.25rem;

  & p {
    margin: 0;
  }

  & ul {
    list-style: decimal inside;
    padding: 0;
  }

  & li {
    height: 4.125rem;
    width: 100%;
    background: linear-gradient(to right, #887bd3, #ba7cd3);
    border-radius: 0.625rem;
    line-height: 4rem;
    margin: 0.625rem 0;
    padding-left: 1.25rem;
  }
`;

const handleClick = event => () => responseServer({ event });

const Select = ({ title, items }) =>
  <div>
    <Content>
      <p>{title}</p>
      <ul>
        {items.map((e, i) =>
          <li key={i} onClick={handleClick(e.event)}>
            {e.text}
          </li>
        )}
      </ul>
    </Content>
  </div>;

export default connect(state => state.select)(Select);
