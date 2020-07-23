import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
    case 'NEW_ANECDOTE': {
        return state.concat(action.data)
    }
    case 'DELETE_ANECDOTE': {
        const deletedAnecdote = action.data

        return state.filter(anecdote => anecdote.id != deletedAnecdote.id)
    }
    case 'UPDATE_ANECDOTE': {
        const newAnecdote = action.data
        const id = newAnecdote.id

        return state.map(anecdote =>
            anecdote.id !== id ? anecdote : newAnecdote
        )
    }
    case 'INIT_ANECDOTES': {
        return action.data
    }
    default: return state
    }
}

export const createAnecdote = (anecdote) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.create(anecdote)

        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
        })
    }
}

export const voteOnAnecdote = (anecdote) => {
    return async dispatch => {
        const newAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        const res = await anecdoteService.update(newAnecdote.id, newAnecdote)

        dispatch({
            type: 'UPDATE_ANECDOTE',
            data: res
        })
    }
}

export const deleteAnecdote = (anecdote) => {
    return async dispatch => {
        await anecdoteService.remove(anecdote.id)

        dispatch({
            type: 'DELETE_ANECDOTE',
            data: anecdote
        })
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()

        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export default anecdoteReducer