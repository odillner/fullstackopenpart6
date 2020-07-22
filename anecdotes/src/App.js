import React from 'react'
import {useSelector} from 'react-redux'

import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'

const App = () => {
    const anecdotes = useSelector(state => state)

    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteList anecdotes={anecdotes}/>
            <NewAnecdote/>
        </div>
    )
}

export default App