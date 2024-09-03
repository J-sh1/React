import React, { useEffect, useState } from 'react'
import api from '../api'
import Banner from '../components/Banner'

const Home = () => {
// /t/p/w1920_and_h800_multi_faces/

// console.log(movie)
// /avedvodAZUcwqevBfm8p4G2NziQ.jpg

    const [movie, setMovie] =  useState()

    useEffect(() => {
        api.get('/movie/top_rated?language=en-US&page=1')
        .then(res => {setMovie(res)})
      }, [])

    console.log(movie)

  return (
    <div>
        <Banner/>
    </div>
  )
}

export default Home