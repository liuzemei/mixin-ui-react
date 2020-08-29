import React from "react";
import { Carousel } from ".";
import {
	withKnobs,
	boolean,
	select,
	number
} from "@storybook/addon-knobs";

import { color } from "../shared/styles";
export default {
	title: "Components/Carousel",
	component: Carousel,
	decorators: [withKnobs],
};

const DivExample = function (height: number, index: number) {
	return (
		<div
			style={{
				background: "#364d79",
			}}
			key={index}
		>
			<span
				style={{
					lineHeight: `${height}px`,
					color: "white",
					fontSize: "20px",
					fontWeight: 800,
					width: "100%",
					textAlign: "center",
					display: "inline-block",
				}}
			>
				{index + 1}
			</span>
		</div>
	);
};

export const knobsCarousel = () => {
	const height = number("height", 300);
	const num = number("item number", 4);
	return (
		<Carousel
			animationDelay={number("animationDelay", 300)}
			height={height}
			radioAppear={select(
				"radioAppear",
				Object.keys(color) as Array<keyof typeof color>,
				"primary"
			)}
			defaultIndex={number("defaultIndex", 0)}
			autoplay={boolean("autoplay", true)}
			autoplayReverse={boolean("autoplayReverse", false)}
			animationDuration={number("animationDuration", 500)}
			autoplayDelay={number("autoplayDelay", 5000)}
		>
			{new Array(num).fill(height).map((v, i) => DivExample(v, i))}
		</Carousel>
	);
};