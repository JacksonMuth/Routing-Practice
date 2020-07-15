import React from 'react'
import { navigate } from '@reach/router'

const Number = (props) => {

    return (
        <div>
            {
                isNaN(props.number) === false ?
                    <h1>The number is: {props.number}</h1>
                    :
                    <h1>The word is: {props.number}</h1>
            }
        </div>
    )
}

export default Number
