const notificationReducer = (state = null, action) => {
    switch (action.type) {
    case 'DISPLAY_INFO': {
        const newState = {
            type: 'info',
            message: action.data
        }
        return newState
    }
    case 'DISPLAY_ERROR': {
        const newState = {
            type: 'error',
            message: action.data
        }
        return newState
    }
    case 'RESET_NOTIFICATION': {
        return null
    }
    default: return state
    }
}

export const displayInfo = (message, duration) => {
    return async dispatch => {
        dispatch({
            type: 'DISPLAY_INFO',
            data: message
        })

        setTimeout(() => {
            dispatch({
                type: 'RESET_NOTIFICATION',
            })
        }, duration*1000)
    }
}

export const displayError = (message, duration) => {
    return async dispatch => {
        dispatch({
            type: 'DISPLAY_ERROR',
            data: message
        })

        setTimeout(() => {
            dispatch({
                type: 'RESET_NOTIFICATION',
            })
        }, duration*1000)
    }
}

export const clearNotification = () => {
    return {
        type: 'RESET_NOTIFICATION',
    }
}

export default notificationReducer