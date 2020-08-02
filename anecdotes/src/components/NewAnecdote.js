import React from 'react'
import {connect} from 'react-redux'

import {createAnecdote} from '../reducers/anecdote'
import {displayInfo, displayError} from '../reducers/notification'

const NewAnecdote = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnecdote = {
            content: content,
            votes: 0
        }

        try {
            console.log(props.createAnecdote)
            props.createAnecdote(newAnecdote)
            props.displayInfo(`You added '${content}'`, 5)
        } catch (err) {
            props.displayError(`You added '${content}'`, 5)
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

const mapDispatchToProps = () => {
    return {
        createAnecdote,
        displayInfo,
        displayError
    }
}
const ConnectedNewAnecdote = connect(
    null,
    mapDispatchToProps()
)(NewAnecdote)

export default ConnectedNewAnecdote
