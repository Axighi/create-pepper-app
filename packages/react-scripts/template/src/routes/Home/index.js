import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

class Home extends React.Component {
  render() {
    return (
      <Root>
        <h1>Hello, I'm Pepper!</h1>
      </Root>
    );
  }
}

export default connect(state => state)(Home);