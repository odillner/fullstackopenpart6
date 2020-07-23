import React from 'react'
import {useDispatch} from 'react-redux'

import {changeFilter} from '../reducers/filter'


const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }

    return (
        <div className='wrapper'>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter