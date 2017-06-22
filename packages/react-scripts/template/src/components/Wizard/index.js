import React from "react";
import styled from "styled-components";
import R from "ramda";

const getArcY = (cx, cy, r, x) => {
  const t1 = r * r - (x - cx) * (x - cx);
  const t2 = Math.sqrt(t1);
  const big = t2 + cy;
  const small = cy - t2;
  return {
    big: Math.round(big),
    small: Math.round(small)
  };
};

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  transform: scale(${props => props.scale});
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  color: #747a92;
  font-size: 1.75rem;
  border-radius: 50%;
  background: linear-gradient(#fff, ${({ ban }) =>
    ban ? "#ff8989" : "#ffbe69"});
`;

export default class Wizard extends React.Component {
  constructor() {
    super();
    this.r0 = 133;
    this.r1 = this.r0 + 4;
    this.r2 = this.r1 + 16;
    this.r3 = this.r2 + 2;
    this.getR2ArcY = R.partial(getArcY, [this.r3, this.r3, this.r2]);
    this.state = { scale: 1 };
  }

  static defaultProps = {
    text: "",
    spinning: false
  };

  componentDidMount() {
    this.setState(() => ({ scale: window.innerWidth / 962 }));
  }

  render() {
    const { r0, r1, r2, r3 } = this;
    return (
      <Root
        radius={this.r3 * 2}
        scale={this.state.scale}
        className={this.props.className}
      >
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <svg
            width={r3 * 2}
            height={r3 * 2}
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          >
            <circle cx={r3} cy={r3} r={r1} />
            <g>
              {this.props.spinning &&
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from={`0 ${r3} ${r3}`}
                  to={`360 ${r3} ${r3}`}
                  dur="3s"
                  repeatCount="indefinite"
                />}
              <path
                d={`M ${40} ${this.getR2ArcY(40)
                  .big} A ${r2} ${r2} 0 0 0 ${260} ${this.getR2ArcY(260).big}`}
              />
              <path
                d={`M ${100} ${this.getR2ArcY(100)
                  .small} A ${r2} ${r2} 0 0 0 ${r3 - r2} ${this.getR2ArcY(
                  r3 - r2
                ).small}`}
              />
              <path
                d={`M ${r3 + r2} ${this.getR2ArcY(r3 + r2)
                  .big} A ${r2} ${r2} 0 0 0 ${216} ${this.getR2ArcY(216)
                  .small}`}
              />
            </g>
          </svg>
        </div>
        <Text radius={r0 * 2} ban={this.props.spinning}>{this.props.text}</Text>
      </Root>
    );
  }
}
