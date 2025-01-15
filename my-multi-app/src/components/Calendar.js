/* 
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

The React useState Hook allows us to track state in a function component

The component imports React and the useState hook from the React library. The useState hook is used to manage the state of the current date.  */
import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  /* This function takes a month and a year as arguments and returns the number of days in that month. It creates a new Date object for the first day of the next month and then subtracts one day to get the last day of the current month.
  */
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  /* This function returns the day of the week for the first day of the specified month (0 for Sunday, 1 for Monday, etc.). It creates a new Date object for the first day of the month and uses the getDay() method.
 */
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  /* This function is called when the "Previous" button is clicked. It updates the currentDate state to the first day of the previous month. */
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  /** This function is called when the "Next" button is clicked. It updates the currentDate state to the first day of the next month */
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek.map((day) => (
      <div className="day week-day" key={day}>
        {day}
      </div>
    ));
  };
 
  /** This function generates the days to be displayed in the calendar
      It first calculates the number of days in the current month and the first day of the month.
      It creates an array of JSX elements representing the days. For the days that fall before the first day of the month, it adds empty divs to maintain the correct alignment.
      It then adds divs for each day of the month
   */
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const firstDay = getFirstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="day empty" key={`empty-${i}`}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div className="day" key={day}>
          {day}
        </div>
      );
    }
    return days;
  };

  /** 
   The component returns a JSX structure that includes
   A header with "Previous" and "Next" buttons for navigation and a title displaying the current month and year.
   A div that contains the rendered days of the month.
   */
  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="days-of-week">
        {renderDaysOfWeek()}
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;