import React from "react";
import styled, { keyframes } from "styled-components";

import moreIcon from "./assets/more.svg";
import branchIcon from "./assets/branch.svg";
import funIcon from "./assets/fun.svg";
import productIcon from "./assets/product.svg";
import background from "./assets/handler.png";
import { responseServer } from "../../dispatcher";

const Root = styled.div`
  display: flex;
  flexDirection: column;
  justifyContent: flex-end;
  flex: 1;
  color: #5f6683;
  fontSize: 1.25rem;
  letterSpacing: 0.125rem;
  fontWeight: lighter;
  position: fixed;
  width: 100vw;
  bottom: 0;
  z-index: 10;
  height: 20vh;
`;

const Handler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.44rem;
  background: url(${background}) no-repeat;
  position: absolute;
  top: 3.44rem;
  left: 0;
  width: 100vw;

  & img {
    margin: auto 0.25rem;
  }
`;

const swipeUp = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const swipeDown = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex: 1;
  animation: ${({ show }) => (show ? swipeUp : swipeDown)} 200ms linear;
`;

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;

  & img {
    margin: 0.3125rem auto;
  }
`;

const MiddleLink = styled(Link)`
  border-left: 1px solid #eff3fb;
  border-right: 1px solid #eff3fb;
`;

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showNave: true
    };
  }

  render() {
    const { showNave } = this.state;
    const handleClick = event => () => responseServer({ event });

    return (
      <Root>
        {!showNave &&
          <Handler onTouchMove={() => this.setState({ showNave: true })}>
            <img src={moreIcon} alt="more" />
            <p>上滑显示导航栏</p>
          </Handler>}
        {showNave &&
          <Nav
            onTouchMove={() => this.setState({ showNave: false })}
            show={showNave}
          >
            <Link onClick={handleClick("cherry")}>
              <img src={branchIcon} alt="branch" />网点介绍
            </Link>
            <MiddleLink onClick={handleClick("banana")}>
              <img src={productIcon} alt="product" />产品介绍
            </MiddleLink>
            <Link onClick={handleClick("apple")}>
              <img src={funIcon} alt="fun" />互动娱乐
            </Link>
          </Nav>}
      </Root>
    );
  }
}

export default Navbar;
