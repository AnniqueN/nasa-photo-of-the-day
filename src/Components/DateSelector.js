// Used hooks to fetch data and pass data as props

import React from "react";

const DateSelector = ({ handleChange }) => {
  return (
    <section className="user-input">
      <form action="">
        <label>Select a date: </label>
        <input type="date" name="date" onChange={handleChange} />
      </form>
    </section>
  );
};

export default DateSelector;