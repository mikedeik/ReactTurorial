import logo from "./logo.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getRequest = async () => {
    try {
      const response = await axios.get("https://api.publicapis.org/entries", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data.entries);
    } catch (ex) {
      console.log(ex);
    }
  };

  // First Task
  // Na emfanisoume se ul -> li ola ta descriptions apo ta data pou exoume parei apo ta api
  // Molis to kaneis dokimase css na pane ola terma aristera
  // kai i lista na pianei to 80% tis othonis

  useEffect(() => {
    getRequest();
  }, []);
  return (
    <div className="App">
      <h1>React Tutorial</h1>
      {data.length > 0 && <div>{data[0].Description}</div>}
    </div>
  );
}

export default App;
