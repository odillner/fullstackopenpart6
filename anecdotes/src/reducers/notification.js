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

export const displayInfo = (message) => {
    return {
        type: 'DISPLAY_INFO',
        data: message
    }
}

export const displayError = (message) => {
    return {
        type: 'DISPLAY_ERROR',
        data: message
    }
}

export const clearNotification = () => {
    return {
        type: 'RESET_NOTIFICATION',
    }
}

export default notificationReducer