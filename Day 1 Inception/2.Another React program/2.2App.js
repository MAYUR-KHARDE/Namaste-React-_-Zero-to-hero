const heading1 = React.createElement("h1", { id: "h1" }, "I am heading 1");
const heading2 = React.createElement("h1", { id: "h2" }, "I am heading 2");
const div = React.createElement("div", { id: "cointainer" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);
