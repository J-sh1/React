import React, { useEffect, useState } from 'react'
import api from '../api'
import { Spinner } from 'react-bootstrap'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../redux/reducers/movieSlice'
import MovieSlide from '../components/MovieSlide'
const Home = () => {

  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upComingMovies, genreList} = useSelector(state => state.movie)


  // 로딩 상태를 관리하는 state 
  const [loading, setLoading]= useState(true)

  /** 영화 목록들을 가지고 오는 비동기 함수 */
  const getMovieList = async ()=>{

    // API 요청을 하기 위해서 Promise 를 미리 생성해둠 
    const popularList = api.get('/movie/popular?language=ko-KR&page=1')
    const topRatedList = api.get('/movie/top_rated?language=ko-KR&page=1')
    const upComingList = api.get('/movie/upcoming?language=ko-KR&page=1')
    const genreList = api.get('/genre/movie/list?language=ko')

    // 모든 API 요청을 병렬 형태로 실행하고, 결과 값을 배열로 받는다. 
    // 배열의 비구조할당을 이용해서 각각 값을 변수로 저장 
    const [popular, topRated, upComing, genre] =await Promise.all([popularList, topRatedList, upComingList, genreList])

    // console.log('popular', popular)
    // console.log('topRated', topRated)
    // console.log('upComing', upComing);
    // console.log('genre', genre)

    // 데이터 요청이 완료되면 로딩 상태를 false로 바꿔준다. 
    setLoading(false)


    // 받아온 데이터를 Redux 에 보내준다. 
    // 보내준다 == dispatch 
    // 보내줄 행동강령 == action 
    dispatch(movieActions.initData({
      popular : popular.data.results, 
      topRated : topRated.data.results, 
      upComing : upComing.data.results,
      genre : genre.data.genres
    }))
    
  }

  useEffect(()=>{
    getMovieList()
  },[])

  useEffect(()=>{
    // console.log('redux popular', popularMovies)
  },[popularMovies])

  return (
    <div>
      {loading 
      ?  <Spinner animation="border" variant="danger" />
      : (
        <div>
          <Banner movie={popularMovies[0]}/>
          <h1>인기있는 영화</h1>
          <MovieSlide movies={popularMovies}></MovieSlide>
          <h1>평점이 높은 영화</h1>
          <MovieSlide movies={topRatedMovies}></MovieSlide>
          <h1>개봉 예정 영화</h1>
          <MovieSlide movies={upComingMovies}></MovieSlide>
        </div>
      )}
    </div>
  )
}

export default Home