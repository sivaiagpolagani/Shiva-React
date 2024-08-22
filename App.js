/*
*
*
* ReactElement(Object) => HTML(Browser Understand)
*
*/


const parent = React.createElement("div",{id: "parent"},
  [
    React.createElement("div",{id: "child"},
      [
        React.createElement("h1",{},"Welcome to Shivas Viewpoint"),
        React.createElement("h2",{},"Shivas Viewpoint")
      ]),
    React.createElement("div",{id: "child2"},
      [
        React.createElement("h1",{},"Welcome to children 2"),
        React.createElement("h2",{},"Shivas Viewpoint")
      ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

// const heading = React.createElement(
//   "h1",
//   {id: "heading"},
//   "This is Recat Shiva"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);