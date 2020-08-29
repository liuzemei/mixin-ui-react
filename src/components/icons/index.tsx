import React from "react";
import { icons } from "../shared/icons";
import styled from "styled-components";

export interface IconProps {
  /** 图标名 */
  icon: keyof typeof icons;
  /** 是否块级元素 */
  block?: boolean;
  /** 颜色 */
  color?: string;
}

const Svg = styled.svg<IconProps>`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
const Path = styled.path`
  fill: ${(props) => props.color};
`;

export function Icon(props: IconProps) {
  const { icon, color } = props;
  return (
    <Svg
      viewBox="0 0 1024 1024"
      width="20"
      height="20px"
      {...props}
      data-testid="icon-svg"
    >
      <Path d={icons[icon]} color={color} data-testid="path"></Path>
    </Svg>
  );
}
