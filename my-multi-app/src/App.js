/** This imports the React library, which is necessary for creating React components.  */
import React from 'react';
/** This imports the necessary components from the react-router-dom library for routing
   BrowserRouter (aliased as Router): This component wraps the entire application and enables routing.
   Route: This component defines a route in the application.
   Routes: This component is a container for all the Route components, allowing for the rendering of the first matching route.
 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/** other imports bring in the components (Header, Footer, Sidebar, Calendar, Calculator, Mail) that will be used in the application, as well as the CSS file for styling.

 */
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import Calculator from './components/Calculator';
import './App.css';
import './components/Calendar.css';
import './components/Calculator.css';
import './components/Header.css';
import './components/Sidebar.css';
import './components/Footer.css';
import './components/Content.css';

/** This defines a functional component named App. Functional components are a simpler way to write components in React, especially when they do not require state or lifecycle methods.
 */
const App = () => {
  return (
    /** This component wraps the entire application, enabling routing functionality. It listens to the browser's URL and renders the appropriate components based on the current path. */
    <Router>
      {/* This is the main container for the application */}
      <div className="app">
        {/* Header component is rendered at the top of the application, providing navigation links and the title. */}
        <Header />
        {/* This div serves as a container for the sidebar and the main content area. */}
        <div className="main-content">
           {/* Sidebar component is rendered alongside the main content, providing additional navigation options */}
          <Sidebar />
          {/* This div contains the main content that changes based on the current route. */}
          <div className="content">
            {/* This component is used to define the different routes in the application. It replaces the older Switch component from previous versions of React Router. */}

            <Routes>
             {/* Each Route defines a path and the component that should be rendered when that path is matched. 
             path="/": This is the default route that renders a welcome message when the user navigates to the root URL.
             
             path="/calendar": This route renders the Calendar component when the user navigates to /calendar.
             
             path="/calculator": This route renders the Calculator component when the user navigates to /calculator.

             */}

              <Route path="/" element={<h2>Welcome to My Multi App</h2>} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </div>
        </div>
         {/* Footer component is rendered at the bottom of the application, typically containing copyright information or other relevant links. */}

        <Footer />
      </div>
    </Router>
  );
};

// This line exports the App component so that it can be imported and used in other parts of the application, such as in index.js
export default App;
