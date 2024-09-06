import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { Badge } from 'react-bootstrap'

const MovieDetail = () => {

  // /movie/1234 -> useParams() '이거 고유한 값이구나'
  // /movie?id=1234 -> useSearchParams()
  
  const {id} = useParams()
  // console.log(id)

  // movie의 detail 과 revuew는 다른 페이지에서는 필요하지 않고, 오직 이 페이지에서만 필요
  // => 이런 경우에는 Redux 쓸 필요 없음, state로 단순 처리

  const [detail, setDetail] = useState()
  const [reviews, setReviews] = useState()

  const getMovieDetail = async () => {
    // https://api.themoviedb.org/3/movie/{movie_id}
    let res = await api.get(`/movie/${id}?language=ko`)
    // console.log(res)
    setDetail(res.data)
  }

  const getMovieReviews = async () => {
    // https://api.themoviedb.org/3/movie/{movie_id}/reviews
    let res = await api.get(`/movie/${id}/reviews`)
    console.log(res.data.results)
    setReviews(res.data.results)
  }

  useEffect(() => {
    getMovieDetail()
    getMovieReviews()
  }, [])

  return (
    <div>
      {detail && (<>
      {/* 영화 상세 */}
        <div className="container movie-detail">
          <div className="poster">
            <img src={`https://www.themoviedb.org/t/p/original${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="genre">
              {detail.genres.map(item => (
                <Badge bg='danger' key={item.id}>{item.name}</Badge>
              ))}
            </div>
            <h1>{detail.title}</h1>
            <h4>{detail.tagline}</h4>
            <div className="">
              <span>{detail.release_date}</span>
              <span>{detail.runtime}분</span>
              <span>평점 : {detail.vote_average}점</span>
              <span>{detail.adult ? '청소년 관람불가' : '청소년 관람가능'}</span>
            </div>

            <div className="overview">
              {detail.overview}
            </div>
          </div>
        </div>
      </>
      )}
      
      {/* 영화 리뷰 */}
      <div className="container review_box">
        {reviews.map(item =>
          <div key={item.id} className='review-item'>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetail