import React from 'react'
import {useDispatch} from 'react-redux'

import {createAnecdote} from '../reducers/anecdote'
import {displayInfo, clearNotification} from '../reducers/notification'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        info(`You added '${content}'`)
    }

    const info = (message) => {
        dispatch(displayInfo(message))
        setTimeout(() => {dispatch(clearNotification())}, 5000)
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