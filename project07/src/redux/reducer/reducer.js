let initialState = {
    num : 0
}

const reducer = (state = initialState, action) => {
    console.log('action', action)
    console.log('state', state.num)

    if(action.type == 'increment'){
        console.log('증가')
        return {... state, num : state.num + 1}
    } else if (action.type == 'decrement') {
        return {... state, num : state.num - 1}
    } else if (action.type == 'incrementAmount') {
        return {... state, num : state.num + action.payload}
    } else if (action.type == 'decrementAmount') {
        return {... state, num : state.num - action.payload}
    }

    return {... state}
    /*
    reducer는 늘 return을 필요로 한다.
    만약 if문 사용 시, if문 바깥에 기본 return을 둘 것
    */
}

export default reducer