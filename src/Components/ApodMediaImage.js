// Used hooks to fetch data and pass data as props

import React from "react";

const ApodMediaImage = ({ data }) => {
  const getMedia = () => {
    if (data.media_type === "image") {
      return <img src={data.url} alt="temp" width="500" height="500" />;
    } else if (data.media_type === "video") {
      return <iframe src={data.url} width="500" height="500" title="temp" />;
    }
  };

  return (
    <section className="apod-header">
      <h2 className="apod-header">{data.header}</h2>
      {getMedia()}
      <p className="apod-explanation">
        <strong>Explanation</strong>: {data.explanation}
      </p>
    </section>
  );
};

export default ApodMediaImage;
