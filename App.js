
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById('root');
const element = React.createElement('h1', { id: 'my-heading' }, 'Hello, world!');
console.log(element);

const root = ReactDOM.createRoot(rootElement);
root.render(element);
