import React from "react";

const Errors = ({ error }) => {
  return (
    error && (
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        Unable to get gifs. Please try again later.
      </div>
    )
  );
};
export default Errors;
