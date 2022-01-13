import { useEffect, useState } from "react";
import APODCard from "./APODCard";
import "./App.css";

const API_KEY = "QCOhw34iRN2rgjqkcHja3IA5NeKb0i8oP9wPiF6W";

function App() {
  const [loading, setLoading] = useState(true);
  const [APODList, setAPODList] = useState([]);

  document.body.style.overflow = "hidden";

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?start_date=2022-01-01&api_key=" +
        API_KEY
    )
      .then((resp) => resp.json())
      .then((data) => {
        setAPODList(data.reverse());
        setLoading(false);
        document.body.style.overflow = "auto";
      });
  }, []);

  return (
    <div>
      <h1>Spacestagram</h1>
      {loading ? (
        <div className="loading-cont">
          <div className="loading" />
          <div className="loading" />
        </div>
      ) : (
        APODList.map((APOD) => <APODCard {...APOD} key={APOD.date} />)
      )}
    </div>
  );
}

export default App;
