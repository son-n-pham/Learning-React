// 1) Import the React and ReactDOM libraries

// This library defines what a component is and
// how multiple components work together
import React from 'react';

// This library knows how to get a component to show
// up in the browser
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root in index.html
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // let message = 'Bye there!';
  // if (Math.random() > 0.5) message = 'Hello there!';
  // return <h1>{message}</h1>;

  // // 2 variables in h1
  // const name = 'Samantha';
  // const age = 23;
  // return (
  //   <h1>
  //     {name}: {age}
  //   </h1>
  // );

  // Input
  return <input style={{ border: '3px solid red' }} type="number" min={5} />;
}

// 5) Show the component on the screen
root.render(<App />);
