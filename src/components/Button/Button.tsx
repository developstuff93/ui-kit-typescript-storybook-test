import React from "react";
import classnames from "classnames";
import { BtnProps } from "./types";
import "./index.css";

/**
 * Build a branded button component
 * - User should be able to specify the brand of button
 * - User should be able to specify type of button
 * - User should be able to control the text inside the button
 * - User should be able to add custom click event
 */

const getBtnProperties = (brand?: string, type?: string) => {
  const colors = {
    bgColor: "base",
    txtColor: "white",
    borderColor: "none",
  };

  if (type === "secondary") {
    colors.bgColor = "white";
    colors.txtColor = "gray-dark";
    colors.borderColor = "gray-light";
    return colors;
  }

  if (type === "disabled") {
    colors.txtColor = "white";
    colors.bgColor = "gray-light";
    return colors;
  }

  if (brand === "first") {
    colors.bgColor = "blue-light";
    return colors;
  }

  if (brand === "second") {
    colors.bgColor = "blue-dark";
    return colors;
  }

  return colors;
};

const Button = ({ brand, type, className, children, onClick }: BtnProps) => {
  const { bgColor, txtColor, borderColor } = getBtnProperties(brand, type);
  const buttonClasses = classnames(
    "btn",
    `bg-${bgColor}`,
    `text-${txtColor}`,
    `border-${borderColor}`,
    {
      "rounded-full": brand === "second",
      "cursor-not-allowed": type === "disabled",
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export { Button };
