import deepFreeze from 'deep-freeze'
import anecdoteReducer, {createAnecdote, voteOnAnecdote, resetAnecdotes} from './anecdoteReducer'

describe('unicafe reducer', () => {
    const initialState = anecdoteReducer()

    test('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = anecdoteReducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    test('new anecdote is added', () => {
        const state = initialState
        const newAnecdote = 'asd'

        deepFreeze(state)
        const newState = anecdoteReducer(state, createAnecdote(newAnecdote))
        expect(newState).toEqual(
            state.concat(asObject(newAnecdote))
        )
    })

    test('anecdote can be voted on', () => {
        const state = initialState

        deepFreeze(state)
        const newState = anecdoteReducer(state, voteOnAnecdote())
        expect(newState).toEqual({
            good: 0,
            neutral: 1,
            bad: 0
        })
    })


    test('state is reset', () => {
        const state = initialState

        deepFreeze(state)
        const newState = anecdoteReducer(state, resetAnecdotes())
        expect(newState).toEqual(initialState)
    })
})