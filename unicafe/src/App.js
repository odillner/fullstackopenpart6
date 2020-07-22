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

    const getTotal = () => {
        return votes.good + votes.neutral + votes.bad
    }

    const getAverage = () => {
        const total = getTotal()

        if (total === 0) {return 0}

        const sum = votes.good + votes.bad * -1

        return sum/total
    }

    const getPositive = () => {
        const total = getTotal()

        if (total === 0) {return 0}

        return votes.good/total * 100
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
            <div>total votes {getTotal()}</div>
            <div>average vote {getAverage()}</div>
            <div>positive % {getPositive()}</div>
        </div>
    )
}

export default App