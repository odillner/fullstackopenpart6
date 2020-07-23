import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import FilterForm from './components/FilterForm'

import {initializeAnecdotes} from './reducers/anecdote'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

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