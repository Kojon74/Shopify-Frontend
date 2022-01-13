import { useEffect, useState } from "react";
import APODCard from "./APODCard";
import "./App.css";

const API_KEY = "QCOhw34iRN2rgjqkcHja3IA5NeKb0i8oP9wPiF6W";

function App() {
  const [APODList, setAPODList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?start_date=2022-01-01&api_key=" +
        API_KEY
    )
      .then((resp) => resp.json())
      .then((data) => {
        setAPODList(data.reverse());
        console.log(data[0]);
      });
  }, []);

  return (
    <div className="page-root">
      <h1>Spacestagram</h1>
      {APODList.map((APOD) => (
        <APODCard {...APOD} />
      ))}
    </div>
  );
}

export default App;
