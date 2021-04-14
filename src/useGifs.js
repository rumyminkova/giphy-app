import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const base_url = "https://api.giphy.com/v1/gifs";

const useGifs = (searchTerm) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = searchTerm
    ? `${base_url}/search?api_key=${API_KEY}&q=${searchTerm}`
    : `${base_url}/trending?api_key=${API_KEY}`;

  const fetchGifs = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      const fetchedData = data.data;
      setGifs(fetchedData);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGifs(searchTerm);
  }, [searchTerm]);

  return { gifs, isLoading, isError, fetchGifs };
};

export default useGifs;
