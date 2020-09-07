import React from "react"
import { Pagination } from "./index"
import {
  withKnobs,
  number,
} from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

export default {
  title: "components/Pagination",
  component: Pagination,
  decorators: [withKnobs],
}

export const knobsPagination = () => (
  <Pagination
    defaultCurrent={number("defaultCurrent", 1)}
    total={number("total", 100)}
    barMaxSize={number("barMaxSize", 5)}
    pageSize={number("pageSize", 5)}
    callback={action("callback")}
  />
)