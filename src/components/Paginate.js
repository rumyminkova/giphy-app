import React from "react";

const Paginate = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-end border-0">
        {pageNumbers.map((n) => {
          return (
            <li
              className={`page-item ${n === currentPage ? "active" : ""}`}
              key={n}
            >
              <a href="!#" onClick={() => paginate(n)} className="page-link">
                {n}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;
