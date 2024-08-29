let initialState = {
    post : [], 
    keyword : ""
}

const reducer = (state = initialState, action)=>{

    console.log('reducer action', action)
    console.log('reducer state', state)

    if(action.type === "addPost"){
        return {...state, post : [...state.post, action.payload]}
    } else if (action.type === "searchKeyword"){
        return {...state, keyword : action.payload}
    }

    return {...state}
}

export default reducer