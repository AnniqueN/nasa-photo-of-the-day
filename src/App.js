//Used hooks to fetch data and pass data as props

import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";
import ApodTitle from "./Components/ApodTitle"
import ApodMediaImage from "./Components/ApodMediaImage";
import DateSelector from "./Components/DateSelector";
import {Container} from "./Components/StyleElement";
function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
     .then(result => {
       const res = result.data
       console.log (result.data)
        setDate(res.date);
      })
      .catch(err => {
        console.log(err);
  
  }, []);

  // const handleChange = event => {
  //   setDate(event.target.value);
  // };
  //Message while the data is fetching
  // if (!data) {
  //   return <div className="loading">Loading...</div>;
  // }

  
});
return (
  <Container>
  {/* <ApodTitle />
  <DateSelector/>
  // <ApodMediaImage data={data} /> */}
  {date}
  </Container>
);
}
export default App;
