/* imports the default export of the React library, while import * as React from 'react' imports all named exports from the React library as an object. */

import React from 'react';

/* Link Function :A progressively enhanced <a href> wrapper to enable navigation with client-side routing 

<Link> is used to set the URL and keep track of browsing history
*/
import { Link } from 'react-router-dom';

/* Defining Header Component */

const Header = () => {
    return (
      <header>
        <h1>My Multi App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/calculator">Calculator</Link>
        </nav>
      </header>
    );
  };
  
  /* The export default syntax allows you to export a single value from a module as the default export. When another module imports the module that uses export default , the imported value will be whatever value was exported as the default. */
  export default Header;