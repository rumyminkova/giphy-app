import React, { useState } from "react";

import useGifs from "../useGifs";
import Loader from "./Loader";
import Errors from "./Errors";
import Paginate from "./Paginate";

const GifsV2 = () => {
  const [search, setSearch] = useState("");
  const { gifs, isLoading, isError, fetchGifs } = useGifs();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = gifs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                  onClick={() => fetchGifs(search)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end px-3">
        <Paginate
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={gifs.length}
          paginate={paginate}
        />
      </div>

      <div className="d-flex flex-wrap justify-content-center p-5 my-5">
        {currentItems.map((item) => (
          <div key={item.id}>
            <img src={item.images.fixed_height.url} alt="gif" />
          </div>
        ))}
      </div>
    </>
  );
};

export default GifsV2;
