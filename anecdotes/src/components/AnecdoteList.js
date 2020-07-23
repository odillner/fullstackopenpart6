import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

import {voteOnAnecdote, deleteAnecdote} from '../reducers/anecdote'
import {displayInfo, displayError} from '../reducers/notification'

const Anecdote = ({anecdote, vote, remove}) => {
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
                <div>
                    <button onClick={() => remove(anecdote)}>remove</button>
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

    const vote = async (anecdote) => {
        try {
            dispatch(voteOnAnecdote(anecdote))
            dispatch(displayInfo(`You voted on '${anecdote.content}'`, 5))
        } catch (err) {
            dispatch(displayError('Failed voting on anecdote', 5))
        }
    }

    const remove = async (anecdote) => {
        try {
            dispatch(deleteAnecdote(anecdote))
            dispatch(displayInfo(`You removed '${anecdote.content}'`, 5))
        } catch (err) {
            dispatch(displayError('Failed removing anecdote', 5))
        }
    }

    const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

    if (anecdotes[0]) {
        return (
            <div className='wrapper'>
                {sortedAnecdotes.map(anecdote =>
                    <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} remove={remove}/>
                )}
            </div>
        )
    } else {
        return null
    }
}

Anecdote.propTypes = {
    anecdote: PropTypes.object.isRequired
}

export default AnecdoteList