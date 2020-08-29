import React from "react";

import  {
  Button,
  APPEARANCES,
  ApperancesTypes,
  SIZES,
  SizesTypes,
} from ".";

import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withKnobs],
};

export const knobsBtn = () => (
  <Button
    size={select<SizesTypes>("size", SIZES, SIZES.medium)}
    href={text("hrefText", "")}
    isLink={boolean("isLink", false)}
    isLoading={boolean("isLoading", false)}
    loadingText={text("loadingText", "I AM Loading")}
    disabled={boolean("disabled", false)}
    appearance={select<ApperancesTypes>(
      "APPERANCES",
      APPEARANCES,
      APPEARANCES.primary
    )}
  >
    {text("childrenText", "Hello Storybook")}
  </Button>
);

export const buttons = () => (
  <>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <br />
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline Primary</Button>
    <br />
  </>
);
