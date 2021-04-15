import React, { useState } from "react";

import useGifs from "../useGifs";
import Loader from "./Loader";
import Errors from "./Errors";
import Paginate from "./Paginate";

const GifsV2 = () => {
  const [search, setSearch] = useState("");
  const { gifs, isLoading, isError, fetchGifs } = useGifs();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    fetchGifs(search);
    paginate(1);
  };

  const handleTrending = () => {
    fetchGifs();
    paginate(1);
    setSearch("");
  };

  if (isLoading) return <Loader />;
  return (
    <>
      <Errors error={isError} />

      <div className="container">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-10 col-md-7 col-lg-5 p-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search gifs"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <span className="input-group-text search">
                <i
                  className="fas fa-search search-icon"
                  onClick={handleSearch}
                />
              </span>
            </div>
            <h4 className="text-center my-4 text-secondary">... or see</h4>
            <div className="d-flex justify-content-center">
              <button
                className="px-5 py-1 my-2 trending-button"
                onClick={handleTrending}
              >
                Trending gifs
              </button>
            </div>
          </div>
        </div>
      </div>

      {gifs.length ? (
        <>
          <div className="d-flex justify-content-end px-3 px-md-5 pt-5">
            <Paginate
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={gifs.length}
              paginate={paginate}
            />
          </div>

          <div className="d-flex flex-wrap justify-content-center p-3 p-md-5 my-1">
            {currentItems.map((item) => (
              <div key={item.id}>
                <img src={item.images.fixed_height.url} alt="gif" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h3 className="text-center">
          Sorry, could not find gifs. Try a different search term.
        </h3>
      )}
    </>
  );
};

export default GifsV2;
