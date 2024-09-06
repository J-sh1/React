import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name : 'movie', 
    initialState : {
        popularMovies : [], 
        topRatedMovies : [], 
        upComingMovies : [], 
        genreList: []
    }, 
    reducers : {
        initData : (state, action)=>{
            // console.log('movieSlice initData', action)
            state.popularMovies = action.payload.popular
            state.topRatedMovies = action.payload.topRated
            state.upComingMovies = action.payload.upComing
            state.genreList = action.payload.genre
        }
    }, 
})

export const movieActions = movieSlice.actions
export default movieSlice.reducer