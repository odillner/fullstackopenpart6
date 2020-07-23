import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

import {voteOnAnecdote} from '../reducers/anecdote'
import {displayInfo, clearNotification} from '../reducers/notification'

const Anecdote = ({anecdote, vote}) => {
    return (
        <div>
            <div className='anecdote'>
                <div>
                    {anecdote.content}
                </div>
                <div>
                has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector(({filter, anecdotes}) => {
        if (filter === '') {
            return anecdotes
        }
        return anecdotes.filter(anecdote =>
            anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteOnAnecdote(anecdote.id))
        info(`You voted on '${anecdote.content}'`)
    }

    const info = (message) => {
        dispatch(displayInfo(message))
        setTimeout(() => {dispatch(clearNotification())}, 5000)
    }

    const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

    return (
        <div className='wrapper'>
            {sortedAnecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote}/>
            )}
        </div>
    )
}

Anecdote.propTypes = {
    anecdote: PropTypes.object.isRequired
}

export default AnecdoteList