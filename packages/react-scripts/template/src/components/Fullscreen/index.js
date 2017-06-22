import styled from "styled-components";

import bg from "./assets/background.png";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background: url('${bg}') no-repeat;
  background-size: cover;
`;

const Fullscreen = Root;

export default Fullscreen;
