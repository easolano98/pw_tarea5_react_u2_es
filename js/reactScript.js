const rootElement = document.getElementById("root");
const element = React.createElement(
  "h1",
  {
    className: "container",
  },
  "Hola mundo con React"
);

ReactDOM.render(element, rootElement);