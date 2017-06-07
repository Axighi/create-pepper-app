import React from "react";
import { connect } from "react-redux";
import s from "styled-components";

const Items = s.div`
  font-size: 25px;
  font-weight: lighter;
  letter-spacing: 2px;
  padding: 10px;
  color: #FFF;
`;

const Item = s.div`
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
  margin: 16px 0;
`;

const List = ({ title, items }) => (
  <div>
    <h1 style={{ margin: 0 }}>{title}</h1>
    <Items>
      {items.map((e, i) => (
        <Item key={i}>
          {e}
        </Item>
      ))}
    </Items>
  </div>
);

export default connect(state => state.list)(List);
