const anecdoteReducer = (state = '', action) => {
    switch (action.type) {
    case 'SET_FILTER': {
        return action.data
    }
    default: return state
    }
}

export const changeFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        data: filter
    }
}


export default anecdoteReducer