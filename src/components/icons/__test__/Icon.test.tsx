import React from "react";
import { render, cleanup } from "@testing-library/react";
import { IconProps, Icon } from "..";
import { icons } from "../../shared/icons";

function IconTest(icon: IconProps["icon"]) {
  const wrapper = render(<Icon icon={icon}></Icon>);
  const path = wrapper.getByTestId("path");
  expect(path).toHaveAttribute("d", icons[icon]);
  cleanup();
}

describe("test Icon components", () => {
  it("it should render correct icon ", () => {
    Object.keys(icons).forEach((key) => {
      IconTest(key as IconProps["icon"]);
    });
  });

  it("it should render block", () => {
    const wrapper = render(<Icon icon="mobile" block></Icon>);
    const svg = wrapper.getByTestId("icon-svg");
    expect(svg).toHaveStyle("display: block");
  });

  it("it should render correct color", () => {
    const wrapper = render(<Icon icon="mobile" color="#f00"></Icon>);
    const path = wrapper.getByTestId("path");
    expect(path).toHaveAttribute("color", "#f00");
  });
});
