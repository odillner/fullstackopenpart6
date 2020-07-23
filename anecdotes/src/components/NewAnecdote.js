import React from 'react'
import {useDispatch} from 'react-redux'

import {createAnecdote} from '../reducers/anecdote'
import {displayInfo, displayError} from '../reducers/notification'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnecdote = {
            content: content,
            votes: 0
        }

        try {
            dispatch(createAnecdote(newAnecdote))
            dispatch(displayInfo(`You added '${content}'`, 5))
        } catch (err) {
            dispatch(displayError(`You added '${content}'`, 5))
        }
    }

    return (
        <div>
            <div className='wrapper'>
                <h2>create new</h2>
                <form onSubmit={addAnecdote}>
                    <input name="anecdote"/>
                    <button type="submit">
                        Create Anecdote
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewAnecdote