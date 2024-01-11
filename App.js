// App.js
import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("span", {id:"myheading", className:"heading"}, "hello from React!");

const JSXelement = <h1>JSX Element</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//const parent = React.creatElement("div", {id:'parent'}, React.createElement("div", {}, [
    //React.createElement("h1", {}, "I am H1 tag"),
    //React.craeteElement("h2", {}, "I am H2 tag"),
    // ]})

console.log(heading);