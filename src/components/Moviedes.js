import React from 'react';
import {useParams} from 'react-router-dom';
import {Moviedata} from './Moviedata' ;


function Moviedes() {
   const {movieId}= useParams()
console.log(movieId)
console.log(Moviedata)
   
    return (
        <div>
           <h3 className='moviedes'>{Moviedata.find(movie=>movie.id==movieId).description}</h3> 

            <iframe className='videos' width="1060" height="415"
            src={Moviedata.find(movie=>movie.id==movieId).video}
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}

export default Moviedes;