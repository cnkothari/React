// This imports the React library, which is necessary for creating React components and using JSX syntax.
import React from 'react';
// This imports the ReactDOM library, which provides methods to interact with the DOM. The client part is used for the new root API introduced in React 18.

import ReactDOM from 'react-dom/client';
import './index.css';

/**This imports the main application component, App, which contains the overall structure and routing of the application */
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot(document.getElementById('root'));: This line creates a root element for the React application. It uses the createRoot method to create a root that can manage the rendering of the application. The document.getElementById('root') part selects the DOM element with the ID of root, which is typically defined in the public/index.html file.

const root = ReactDOM.createRoot(document.getElementById('root'));

// This method is called to render the React application into the root element.

root.render(
  // This is a wrapper component that helps identify potential problems in the application. It activates additional checks and warnings for its descendants. It does not affect the production build but is useful during development.
  <React.StrictMode>

{/* This is the main application component that is rendered inside the StrictMode wrapper. It contains all the routing and components of the application. */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
