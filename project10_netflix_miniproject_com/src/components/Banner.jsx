import React from 'react'

const Banner = ({ movie }) => {

  // console.log('Banner', movie)

  // movie 안의 값이 필요한 style 이 있다면 style 객체로 스타일링 
  // 그 외에는 className을 이용해서 css style 
  const bgStyle = {
    backgroundImage : `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path})`
  }

  return (
    <div className='banner' style={bgStyle}>
      <div className='banner-info'>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner