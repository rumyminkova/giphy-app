import React, { useState } from "react";

import useGifs from "../useGifs";
import Loader from "./Loader";
import Errors from "./Errors";

const GifsV2 = () => {
  const [search, setSearch] = useState("");
  const { gifs, isLoading, isError, fetchGifs } = useGifs(search);

  if (isLoading) return <Loader />;
  return (
    <>
      <Errors error={isError} />
      <div className="d-flex flex-wrap justify-content-center p-5">
        {gifs.map((item) => (
          <div key={item.id}>
            <img src={item.images.fixed_height.url} alt="gif" />
          </div>
        ))}
      </div>
    </>
  );
};

export default GifsV2;
