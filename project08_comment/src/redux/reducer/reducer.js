let initialState = {
    post : [],
    keyword: ''
}

const reducer = (state = initialState, action) => {
    // console.log(action)
    console.log(state)
    return {keyword : action.type, post : action.payload}
}

export default reducer