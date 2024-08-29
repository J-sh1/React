import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    post : [], 
    keyword : ""
}

const postSlice = createSlice({
    name : 'poster',
    initialState,
    reducers : {
        addpost(state, action){
            console.log('add',state, action.payload)
            state.post.push(action.payload)
            console.log(state.post)
        },
        searchKeyword(state, action){

        }
    }
})

export const posterActions = postSlice.actions
export default postSlice.reducer


// let initialState = {
//     post : [], 
//     keyword : ""
// }

// const reducer = (state = initialState, action)=>{

//     console.log('reducer action', action)
//     console.log('reducer state', state)

//     if(action.type === "addPost"){
//         return {...state, post : [...state.post, action.payload]}
//     } else if (action.type === "searchKeyword"){
//         return {...state, keyword : action.payload}
//     }

//     return {...state}
// }

// export default reducer