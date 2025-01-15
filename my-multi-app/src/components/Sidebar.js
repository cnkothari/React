import React from 'react';
// This imports the Link component from react-router-dom, which is used to create navigational links that allow users to navigate between different routes in the application without reloading the page.

import { Link } from 'react-router-dom';

// This defines a functional component named Sidebar. Functional components are simpler and more concise than class components and are the preferred way to create components in modern React.

const Sidebar = () => {
  return (
    // This is a semantic HTML5 element that represents a section of the page that is tangentially related to the content around it. It is often used for sidebars, which contain additional information or navigation links.

    <aside>
      {/* This heading provides context for the sidebar, indicating that it contains navigation links. */}
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
      </ul>
    </aside>
  );
};

// This line exports the Sidebar component so that it can be imported and used in other parts of the application, such as in App.js.

export default Sidebar;