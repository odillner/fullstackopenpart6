import React from 'react'

import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import FilterForm from './components/FilterForm'

const App = () => {
    return (
        <div className='big-wrapper'>
            <Notification/>
            <FilterForm/>
            <h2>Anecdotes</h2>
            <AnecdoteList/>
            <NewAnecdote/>
        </div>
    )
}

export default App