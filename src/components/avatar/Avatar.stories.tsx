import React from "react";
import { Avatar, AvatarSize } from "./index";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withKnobs],
};
type AvatarSizeType = keyof typeof AvatarSize;

export const knobsAvatar = () => (
  <Avatar
    size={select<AvatarSizeType>(
      "size",
      Object.keys(AvatarSize) as AvatarSizeType[],
      "medium"
    )}
    username={text("username", "Mixin")}
    src={text(
      "src",
      "https://mixin-images.zeromesh.net/6_jubnHGLBBT3ihwR9tUWX5_IE-A4Idc1eu4IsDkU9xH7bwMEtp49YVA_BeEc-S6o5G3HN6x7fjWR9ww6y-KVQE=s256"
    )}
    isLoading={boolean("isLoading", false)}
  />
);

export const large = () => (
  <div>
    <Avatar isLoading size="large" />
    <Avatar size="large" username="Mixin" />
    <Avatar
      size="large"
      username="Mixin"
      src="https://mixin-images.zeromesh.net/6_jubnHGLBBT3ihwR9tUWX5_IE-A4Idc1eu4IsDkU9xH7bwMEtp49YVA_BeEc-S6o5G3HN6x7fjWR9ww6y-KVQE=s256"
    />
  </div>
);

export const medium = () => (
  <div>
    <Avatar isLoading />
    <Avatar username="中文" />
    <Avatar
      username="Mixin"
      src="https://mixin-images.zeromesh.net/6_jubnHGLBBT3ihwR9tUWX5_IE-A4Idc1eu4IsDkU9xH7bwMEtp49YVA_BeEc-S6o5G3HN6x7fjWR9ww6y-KVQE=s256"
    />
  </div>
);

export const small = () => (
  <div>
    <Avatar isLoading size="small" />
    <Avatar size="small" username="Mixin" />
    <Avatar
      size="small"
      username="Mixin"
      src="https://mixin-images.zeromesh.net/6_jubnHGLBBT3ihwR9tUWX5_IE-A4Idc1eu4IsDkU9xH7bwMEtp49YVA_BeEc-S6o5G3HN6x7fjWR9ww6y-KVQE=s256"
    />
  </div>
);

export const tiny = () => (
  <div>
    <Avatar isLoading size="tiny" />
    <Avatar size="tiny" username="Mixin" />
    <Avatar
      size="tiny"
      username="Mixin"
      src="https://mixin-images.zeromesh.net/6_jubnHGLBBT3ihwR9tUWX5_IE-A4Idc1eu4IsDkU9xH7bwMEtp49YVA_BeEc-S6o5G3HN6x7fjWR9ww6y-KVQE=s256"
    />
  </div>
);
