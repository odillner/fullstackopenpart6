import React from 'react'
import {connect} from 'react-redux'

import {changeFilter} from '../reducers/filter'


const Filter = (props) => {
    const handleChange = (event) => {
        props.changeFilter(event.target.value)
    }

    return (
        <div className='wrapper'>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = () => {
    return {
        changeFilter
    }
}
const ConnectedFilter = connect(
    null,
    mapDispatchToProps()
)(Filter)

export default ConnectedFilter