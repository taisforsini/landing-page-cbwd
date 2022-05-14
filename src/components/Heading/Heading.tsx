import React from "react";
import "./heading_style.css";

export interface HeadingProps {
  text: string;
}

export const Heading = (props: HeadingProps) => {
  return <div className="text-align-center heading-style">{props.text}</div>;
};
