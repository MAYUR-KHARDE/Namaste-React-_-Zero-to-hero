const heading = React.createElement(
  "h1",
  { id: "heading" },
  " Heading Injected via React"
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
