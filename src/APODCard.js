import React, { useState } from "react";

function APODCard({ date, hdurl, title }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="apod-card" key={date}>
      <img src={hdurl} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="date">{date}</p>
      <button className="like" onClick={() => setLiked(!liked)}>
        {liked ? "Unlike" : "Like"}
      </button>
      {/* <p>{APOD.explanation}</p> */}
    </div>
  );
}

export default APODCard;
