const initialState = {
    catergory: 0,
    sortBy: 'popular'
}

const filters = (state = initialState,action) => {
    if(action.type === 'SET_SORT_BY_'){
        return{
            ...state,
            category: action.payload
        }
    }
    return state
}

export default filters