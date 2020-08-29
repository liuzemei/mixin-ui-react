import React, { HTMLAttributes, useMemo } from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";
import { glow } from "../shared/animation";
import { Icon } from "../icons";
export const AvatarSize = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** 是否加载中 */
  isLoading?: boolean;
  /** 用户名 */
  username?: string;
  /** 图片地址 */
  src?: null | string;
  size?: keyof typeof AvatarSize;
}

const SizeFontMap = {
  large: typography.size.s3,
  medium: typography.size.s2,
  small: typography.size.s1,
  tiny: parseFloat(typography.size.s1) - 2,
};

const Initial = styled.div<AvatarProps>`
  color: ${color.lightest};
  text-align: center;

  font-size: ${(props) => SizeFontMap[props.size || "medium"]}px;
  line-height: ${(props) => AvatarSize[props.size || "medium"]}px;
`;

const Image = styled.div<AvatarProps>`
  backgroud: ${(props) => (!props.isLoading ? "transparent" : color.light)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${(props) => AvatarSize[props.size || "medium"]}px;
  width: ${(props) => AvatarSize[props.size || "medium"]}px;
  line-height: ${(props) => AvatarSize[props.size || "medium"]}px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  svg {
    potions: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${color.medium};
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

interface a11yProps {
  [key: string]: boolean | string;
}

export function Avatar(props: AvatarProps) {
  const { isLoading, src, username, size } = props;
  const avatarFigure = useMemo(() => {
    let avatarFigure = <Icon icon="useralt" />;
    const a11yProps: a11yProps = {};
    if (isLoading) {
      a11yProps["aria-busy"] = true;
      a11yProps["aria-label"] = "Loading avatar ...";
    } else if (src) {
      avatarFigure = <img src={src} alt={username} data-testid="avatar-img" />;
    } else {
      a11yProps["aria-label"] = username || "";
      avatarFigure = (
        <Initial size={size} aria-hidden="true">
          {username!.substring(0, 1)}
        </Initial>
      );
    }
    return avatarFigure;
  }, [isLoading, src, username, size]);

  return (
    <Image
      size={size}
      isLoading={isLoading}
      src={src}
      {...props}
      data-testid="avatar-div"
    >
      {avatarFigure}
    </Image>
  );
}

Avatar.defaultProps = {
  isLoading: false,
  username: "loading",
  src: null,
  size: "medium",
};
