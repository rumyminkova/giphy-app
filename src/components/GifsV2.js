import React, { useState } from "react";

import useGifs from "../useGifs";

const GifsV2 = () => {
  const [search, setSearch] = useState("");
  const { gifs, fetchGifs } = useGifs(search);

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

export default GifsV2;
