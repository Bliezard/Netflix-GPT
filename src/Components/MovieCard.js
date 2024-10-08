import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 px-2">
      <img 
      alt="Movie Card" 
      src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
