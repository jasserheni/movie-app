import React from 'react'
import {Redirect,useParams} from 'react-router-dom'
import {Moviedata} from './Moviedata' 


function Moviedes() {
   const {movieId}= useParams()
   console.log(movieId)
console.log(Moviedata)
   
    return (
        <div>
            {Moviedata.find(movie=>movie.id==movieId).description
}
        </div>
    )
}

export default Moviedes;