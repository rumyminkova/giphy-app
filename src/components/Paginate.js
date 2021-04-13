import React from "react";

const Paginate = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-end border-0">
        {pageNumbers.map((n) => {
          return (
            <li
              className={`page-item ${n === props.currentPage ? "active" : ""}`}
            >
              <a
                href="#"
                onClick={() => props.pageSelected(n)}
                className="page-link"
              >
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
