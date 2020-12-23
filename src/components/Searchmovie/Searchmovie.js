import React from 'react';

import Rate from '../Rate';



const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="searchC">
      

       
      <input className="sear"
          type="text"
          placeholder="Type movie name "
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rateSerch">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
    
      </div>
    </div>
  );
};

export default SearchMovie;
