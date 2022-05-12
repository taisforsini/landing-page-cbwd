import React from "react";
import "./App.css";
import { Heading } from "./components/Heading/Heading";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { Section } from "./components/Section/Section";

function App() {
  return (
    <div className="App-header">
      <Section
        image="./images/firstSection.png"
        title="Small Thing but Intellectual Idea"
        subtitle="Browse our HTML5 responsive agency template below"
      />
      <Section image="" title="" subtitle="" />
      <Section image="" title="" subtitle="" />
      <Section image="" title="" subtitle="" />
    </div>
  );
}

export default App;
