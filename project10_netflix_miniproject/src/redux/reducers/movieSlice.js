import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";

export const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        popularMovies : [],
        topRetedMovies : [],
        upcomingMovues : []
    },
    reducers : {
        initData(state, action) {
            state.popularMovies(action.payload)
            state.topRetedMovies(action.payload)
            state.upcomingMovues(action.payload)
        }
    }
})

export const MovieActions = movieSlice.actions
export default movieSlice.reducer