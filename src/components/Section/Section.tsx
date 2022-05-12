import React from "react";
import { Heading } from "../Heading/Heading";
import { Paragraph } from "../Paragraph/Paragraph";
import "./section_style.css";

export interface SectionProps {
  title: string;
  image: string;
  onClick?: () => void;
  buttonText?: string;
  subtitle: string;
}

export const Section = (props: SectionProps) => {
  return (
    <div className="background">
      <img className="image" src={props.image} alt="" width="100vw" />
      <Heading text={props.title} />
      <Paragraph text={props.subtitle} />
    </div>
  );
};
