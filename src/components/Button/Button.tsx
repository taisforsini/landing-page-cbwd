import React from "react";
import "./button_style.css";

export interface ButtonProps {
  text: string;
}
export const Button = (props: ButtonProps) => {
  return <div className="btn btn-primary styled-button">{props.text}</div>;
};
