import React from "react";
import "./paragraph._style.css";

export interface ParagraphProps {
  text: string;
}

export const Paragraph = (props: ParagraphProps) => {
  return <div>{props.text}</div>;
};
