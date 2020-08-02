import React from 'react'
import {connect} from 'react-redux'
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

const AnecdoteList = (props) => {
    const anecdotesToShow = () => {
        if (props.filter === '') {
            return props.anecdotes
        }
        return props.anecdotes.filter(anecdote =>
            anecdote.content.toLowerCase().includes(props.filter.toLowerCase())
        )
    }

    const vote = async (anecdote) => {
        try {
            props.voteOnAnecdote(anecdote)
            props.displayInfo(`You voted on '${anecdote.content}'`, 5)
        } catch (err) {
            props.displayError('Failed voting on anecdote', 5)
        }
    }

    const remove = async (anecdote) => {
        try {
            props.deleteAnecdote(anecdote)
            props.displayInfo(`You removed '${anecdote.content}'`, 5)
        } catch (err) {
            props.displayError('Failed removing anecdote', 5)
        }
    }

    const sortedAnecdotes = anecdotesToShow().sort((a,b) => b.votes - a.votes)

    if (sortedAnecdotes[0]) {
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = () => {
    return {
        voteOnAnecdote,
        deleteAnecdote,
        displayInfo,
        displayError
    }
}


const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps()
)(AnecdoteList)

export default ConnectedAnecdoteList