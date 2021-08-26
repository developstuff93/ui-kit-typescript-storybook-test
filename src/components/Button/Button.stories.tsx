import React from "react";
import { Button } from "./Button";
import { BtnBrandOptions, BtnProps, BtnTypeOptions } from "./types";

/**
 * Write stories showing all variations of button with abilitiy to customize args
 * - bonus points, include description / custom docs for docs page
 */

export default {
  title: "Application/Component Library/Button",
  component: Button,
};

interface Props extends BtnProps {
  text: string;
}

export function Typical({ text, ...args }: Props) {
  return <Button {...args}>{text}</Button>;
}

Typical.args = {
  text: "Click Me!",
  onClick: () => {
    alert("clicked!");
  },
};

Typical.argTypes = {
  text: {
    name: "label",
    description: "Button label (String)",
    control: "text",
  },
  type: {
    name: "Type",
    control: {
      type: "radio",
      options: BtnTypeOptions,
    },
  },
  brand: {
    name: "Brand",
    control: {
      type: "radio",
      options: BtnBrandOptions,
    },
  },
  onClick: {
    control: { disable: true },
  },
  className: {
    table: { disable: true },
  },
};
