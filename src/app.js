const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"), // {} empty object -- we can add attributes of h1 from here
    React.createElement(Pet, {name: "Luna", animal: "Dog", breed : "Havanese"}),
    React.createElement(Pet, {name: "Pepper", animal: "Bird", breed : "Cockatiel"}),
    React.createElement(Pet, {name: "Sudo", animal: "Dog", breed : "Wheaten Terrie"}),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
