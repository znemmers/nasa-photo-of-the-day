import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from './Components/NasaPhoto'

function App() {
  const [data, setData] = useState()
  const apiKey = process.env.API_KEY
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zhDE369sBVmFq2jcXVTWw3F0NEcLqdLce1S6Kays')
      .then(res => {
        console.log("hello", res)
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, []);


  return (
    <div className="App">
     {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;
