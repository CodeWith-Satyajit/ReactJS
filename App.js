
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById('root');
// const element = React.createElement('h1', { id: 'my-heading' }, 'Hello, world!');
// console.log(element);


const HeadingComponent = ( ) => {
  return (<div>
   <h1>React Component</h1> </div>)
}



const root = ReactDOM.createRoot(rootElement);
root.render(<HeadingComponent />);
