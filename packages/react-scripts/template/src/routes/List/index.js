import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Items = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  letter-spacing: 0.125rem;
  padding: 0.625rem;
  color: #FFF;
`;

const Item = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  line-height: 3.125rem;
  margin: 1rem 0;
`;

const List = ({ title, items }) =>
  <div>
    <h1 style={{ margin: 0 }}>{title}</h1>
    <Items>
      {items.map((e, i) =>
        <Item key={i}>
          {e}
        </Item>
      )}
    </Items>
  </div>;

export default connect(state => state.list)(List);
