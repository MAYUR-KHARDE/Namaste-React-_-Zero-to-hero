import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", { id: "h1" }, "I am heading 1");
// const heading2 = React.createElement("h1", { id: "h2" }, "I am heading 2");
// const div = React.createElement("div", { id: "cointainer" }, [
//   heading1,
//   heading2,
// ]);

//React Element
// const heading1 = <h1 id="h1">I am heading 1</h1>;
// const heading2 = <h1 id="h2">I am heading 2</h1>;
// const div = (
//   <div id="container">
//     {heading1}
//     {heading2}
//   </div>
// );
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(div);

//React Component
// functional component should always start with capital letter
const ContainerComponent = () => {
  return (
    <div id="cointainer">
      <h1>I am Heading 1</h1>
      <h1>I am Heading 2</h1>
    </div>
  );
};

const ParagraphComponent = () => {
  return (
    <div>
      <ContainerComponent /> // Component Composition
      <p>I am paragraph</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ParagraphComponent />);
