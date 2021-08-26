import React from "react";
import { BtnProps, Button } from "./Button";

/**
 * Write stories showing all variations of button with abilitiy to customize args
 * - bonus points, include description / custom docs for docs page
 */

export default {
  title: "Application/Component Library/Button",
  component: Button,
};

const btnTypeOptions = ["primary", "secondary", "disabled"];
const btnBrandOptions = ["first", "second"];

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
      options: btnTypeOptions,
    },
  },
  brand: {
    name: "Brand",
    control: {
      type: "radio",
      options: btnBrandOptions,
    },
  },
  onClick: {
    control: { disable: true },
  },
  className: {
    table: { disable: true },
  },
};
