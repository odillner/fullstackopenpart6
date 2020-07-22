import React from 'react'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

import {voteOnAnecdote} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, vote}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = ({anecdotes}) => {
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteOnAnecdote(id))
    }

    const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote}/>
            )}
        </div>
    )
}


Anecdote.propTypes = {
    anecdote: PropTypes.object.isRequired
}

AnecdoteList.propTypes = {
    anecdotes: PropTypes.array.isRequired
}
export default AnecdoteList