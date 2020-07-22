import deepFreeze from 'deep-freeze'
import counterReducer, {voteGood, voteNeutral, voteBad, performReset} from './reducer'

describe('unicafe reducer', () => {
    const initialState = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    test('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = counterReducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    test('good is incremented', () => {
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, voteGood())
        expect(newState).toEqual({
            good: 1,
            neutral: 0,
            bad: 0
        })
    })

    test('neutral is incremented', () => {
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, voteNeutral())
        expect(newState).toEqual({
            good: 0,
            neutral: 1,
            bad: 0
        })
    })

    test('bad is incremented', () => {
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, voteBad())
        expect(newState).toEqual({
            good: 0,
            neutral: 0,
            bad: 1
        })
    })

    test('state is reset', () => {
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, performReset())
        expect(newState).toEqual(initialState)
    })
})