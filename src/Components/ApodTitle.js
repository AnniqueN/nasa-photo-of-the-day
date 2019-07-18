// Used hooks to fetch data and pass data as props

import React from "react";

const ApodTitle = () => {
  return (
    <>
      <h1 className="Title">APOD</h1>
      <section className="description">
        <p>From NASA website:</p>
        <blockquote cite="https://api.nasa.gov/api.html#apod">
          One of the most popular websites at NASA is the {""}
          <strong>Astronomy Picture of the Day</strong>. In fact, this website
          is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. 
        </blockquote>
      </section>
    </>
  );
};

export default ApodTitle;