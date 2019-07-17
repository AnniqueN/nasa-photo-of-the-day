//Used hooks to fetch data and pass data as props

import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";
import ApodTitle from "./ApodTitle"
import ApodMediaImage from "./ApodMediaImage";
import DateSelector from "./DateSelector";

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState("2019-07-17");

  useEffect(() => {
    const getData = async () => {
      return await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          date: date,
          api_key: "DEMO_KEY"
        }
      });
    };

    getData()
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [date]);

  const handleChange = event => {
    setDate(event.target.value);
  };

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <ApodTitle />
      <DateSelector handleChange={handleChange} />
      <ApodMediaImage data={data} />
    </div>
  );
}

export default App;
