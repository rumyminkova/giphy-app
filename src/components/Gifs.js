import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "./Loader";

const Gifs = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getGifs = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          limit: "10",
        },
      });
      const data = results.data.data;
      setGifs(data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs();
  }, []);

  const RenderGifs = () => {
    if (isLoading) return <Loader />;
    return (
      <div className="d-flex flex-wrap justify-content-center p-5">
        {gifs.map((item) => (
          <div key={item.id}>
            <img src={item.images.fixed_height.url} alt="gif" />
          </div>
        ))}
      </div>
    );
  };

  const RenderError = () => {
    return (
      isError && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get gifs.Please try again later.
        </div>
      )
    );
  };
  return (
    <>
      <RenderError />
      <RenderGifs />
    </>
  );
};

export default Gifs;