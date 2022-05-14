import React from "react";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Paragraph } from "../Paragraph/Paragraph";
import "./section_style.css";

export interface SectionProps {
  title: string;
  onClick?: () => void;
  buttonText?: string;
  subtitle: string;
}

export const Section = (props: SectionProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="content flex-column">
        <Heading text={props.title} />
        <Paragraph color="white" text={props.subtitle} />
        {props.buttonText && <Button text={props.buttonText} />}
      </div>
    </div>
  );
};
