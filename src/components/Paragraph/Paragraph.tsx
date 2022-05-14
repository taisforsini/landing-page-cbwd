import React from "react";
import "./paragraph_style.css";

export interface ParagraphProps {
  text: string;
  color: "black" | "white";
}

export const Paragraph = (props: ParagraphProps) => {
  return props.color === "black" ? (
    <div className="text-align-center paragraph-style text-black">
      {props.text}
    </div>
  ) : (
    <div className="text-align-center paragraph-style text-white">
      {props.text}
    </div>
  );
};
