import React, { useState } from "react";

import useGifs from "../useGifs";
import Loader from "./Loader";
import Errors from "./Errors";

const GifsV2 = () => {
  const [search, setSearch] = useState("");
  const { gifs, isLoading, isError, fetchGifs } = useGifs();

  if (isLoading) return <Loader />;
  return (
    <>
      <Errors error={isError} />
      <div className="container">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-6 col-md-4 col-lg-3 p-0">
            <input
              type="text"
              placeholder="Search gifs"
              className="form-control"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <div className="col-2 col-md-1 p-0">
            <button
              className="btn btn-outline-secondary form-control"
              onClick={() => fetchGifs(search)}
            >
              <i className="fas fa-search search-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center p-5 my-5">
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
