import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo)

  //Fetching the trailer vedio and updating the store with trailer vedio data

  const getMovieVedios = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieId + 
      "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
   !trailerVideo && getMovieVedios();
  }, []);
};

export default useMovieTrailer;
