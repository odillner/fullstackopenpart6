const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'GOOD': {
        const newState = {
            ...state,
            good: state.good+1
        }

        return newState
    }
    case 'NEUTRAL': {
        const newState = {
            ...state,
            neutral: state.neutral+1
        }

        return newState
    }
    case 'BAD': {
        const newState = {
            ...state,
            bad: state.bad+1
        }

        return newState
    }
    case 'ZERO': {
        return initialState
    }
    default: return state
    }

}


export const voteGood = () => {
    return {
        type: 'GOOD'
    }
}

export const voteNeutral = () => {
    return {
        type: 'NEUTRAL'
    }
}

export const voteBad = () => {
    return {
        type: 'BAD'
    }
}

export const performReset = () => {
    return {
        type: 'ZERO'
    }
}

export default counterReducer