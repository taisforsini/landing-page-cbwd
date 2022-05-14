import React, { useEffect, useState } from "react";
import { Paragraph } from "../Paragraph/Paragraph";

export interface TabProps {
  tabs: string[];
}
export const Tab = (props: TabProps) => {
  const [content, setContent] = useState("");
  const [currentTab, setCurrentTab] = useState("about");
  const getContent = () => {
    switch (currentTab) {
      case "about":
        setContent(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam maecenas ultricies mi. Etiam sit amet nisl purus. Platea dictumst quisque sagittis purus sit amet volutpat. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Semper viverra nam libero justo. Viverra vitae congue eu consequat ac felis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Parturient montes nascetur ridiculus mus mauris vitae. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Tempus imperdiet nulla malesuada pellentesque elit eget. Risus feugiat in ante metus dictum at tempor commodo. Augue ut lectus arcu bibendum at varius vel pharetra."
        );
        break;

      case "address":
        setContent(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Cras semper auctor neque vitae tempus quam pellentesque. Hac habitasse platea dictumst vestibulum. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Neque aliquam vestibulum morbi blandit cursus. Quis enim lobortis scelerisque fermentum dui. Augue lacus viverra vitae congue eu. Ac tortor vitae purus faucibus ornare suspendisse sed. Lorem mollis aliquam ut porttitor leo a. Quis blandit turpis cursus in hac habitasse platea. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae congue eu consequat ac felis. Eleifend donec pretium vulputate sapien nec sagittis aliquam. At imperdiet dui accumsan sit amet nulla. Nibh sit amet commodo nulla. Neque egestas congue quisque egestas diam in. A diam maecenas sed enim ut sem viverra aliquet. Et tortor at risus viverra adipiscing at. Curabitur vitae nunc sed velit dignissim. Pulvinar pellentesque habitant morbi tristique senectus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Integer vitae justo eget magna fermentum iaculis eu non diam. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Magna sit amet purus gravida quis blandit turpis cursus. Et tortor at risus viverra adipiscing at."
        );
        break;

      case "contact":
        setContent(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getContent();
  }, [currentTab]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="nav-link" onClick={() => setCurrentTab("about")}>
                Sobre a agência
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCurrentTab("address")}
              >
                Nossos endereços
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCurrentTab("contact")}
              >
                Contato
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Paragraph text={content} color="black" />
    </div>
  );
};
