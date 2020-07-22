import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {voteGood, voteNeutral, voteBad, performReset} from './reducer'

const App = () => {
    const dispatch = useDispatch()
    const votes = useSelector(state => state)

    const good = () => {
        dispatch(voteGood())
    }
    const neutral = () => {
        dispatch(voteNeutral())
    }
    const bad = () => {
        dispatch(voteBad())
    }
    const reset = () => {
        dispatch(performReset())
    }


    return (
        <div>
            <button onClick={good}>good</button>
            <button onClick={neutral}>neutral</button>
            <button onClick={bad}>bad</button>
            <button onClick={reset}>reset stats</button>
            <div>good {votes.good}</div>
            <div>neutral {votes.neutral}</div>
            <div>bad {votes.bad}</div>
        </div>
    )
}

export default App