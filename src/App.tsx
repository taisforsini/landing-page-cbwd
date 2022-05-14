import React from "react";
import "./App.css";
import { Section } from "./components/Section/Section";
import { Tab } from "./components/Tab/Tab";

function App() {
  return (
    <div className="App-header">
      <div className="image-1 d-flex justify-content-center">
        <Section
          title="Small Thing but Intellectual Idea"
          subtitle="Browse our HTML5 responsive agency template below"
          buttonText="VIEW MORE"
        />
      </div>
      <div className="image-2 d-flex justify-content-end p-5">
        <Section
          title="Unlimited possibilities for easy site creation"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="VIEW MORE"
        />
      </div>
      <div className="image-3 d-flex justify-content-left p-5">
        <Section
          title="Unlimited possibilities for easy site creation"
          subtitle=""
          buttonText="VIEW MORE"
        />
      </div>

      <div className="image-4 d-flex justify-content-left">
        <Section
          title="A Better Website Means Better User Experience"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="VIEW MORE"
        />{" "}
      </div>
      <Tab tabs={["Sobre a agência", "Nossos endereços", "Contato"]} />
    </div>
  );
}

export default App;
