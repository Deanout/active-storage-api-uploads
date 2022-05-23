import { AppContext } from "../App";
import React, { useContext, useEffect } from "react";

function LatestImage() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:3000/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url);
      })
      .catch((error) => console.error(error));
  }, [latestPost]);

  return (
    <div>
      <img src={latestPost} alt="latest post" className="latest-image" />
    </div>
  );
}

export default LatestImage;
