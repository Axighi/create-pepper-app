import React from 'react';
import loadingIcon from './loading.svg';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(128, 128, 128, .5);
`

class Loading extends React.Component {
  render() {
    return <Root><img src={loadingIcon} alt='Loading...' /></Root>; 
  }
}

export default Loading;
