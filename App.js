import React from "react";
import ReactDOM from "react-dom/client"

const elem = <span>this is element</span>
const Title = (fine) => (
  <h1 className="head" tabIndex="5">
    This Shiva React {elem} {fine}
  </h1>
);

const id = 1000;
const st = "fgjbh"
//Component Composation
const HeadingComponent = () => (
  <div id="container">
   {Title("ramp")}
    <h1 className="head" tabIndex="1">This is a functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<HeadingComponent />)