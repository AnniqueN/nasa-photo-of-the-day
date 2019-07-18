//Used hooks to fetch data and pass data as props

import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";
import ApodTitle from "./Components/ApodTitle"
import ApodMediaImage from "./Components/ApodMediaImage";
import DateSelector from "./Components/DateSelector";

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState("2019-07-17");

  useEffect(() => {
    const getData = async () => {
      return await axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", {
        params: {
          date: date,
          api_key: "cvQfsM1Yd2opQ3UAQEufPMMPRinnTReNGgUeirlt"
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
  //Message while the data is fetching
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
