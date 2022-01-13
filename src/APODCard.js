import React, { useState } from "react";
import Heart from "react-animated-heart";

function APODCard({ date, url, media_type, title }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="apod-card">
      {media_type === "image" ? (
        <img className="media" src={url} alt={title} />
      ) : (
        <iframe
          className="media"
          height="300"
          title={date}
          src={
            "https://www.youtube.com/embed/RtDSxi-D4KA?autoplay=1&mute=1&loop=1&controls=0&playlist=RtDSxi-D4KA"
          }
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="image-desc">
        <div>
          <h2 className="title">{title}</h2>
          <p className="date">{date}</p>
        </div>
        <Heart
          isClick={liked}
          onClick={() => setLiked(!liked)}
          styles={{ height: "80px", width: "80px", margin: "-25px 0 0 -25px" }}
        />
      </div>
    </div>
  );
}

export default APODCard;
