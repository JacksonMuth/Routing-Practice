import React from 'react'

const WordStyle = (props) => {
    return (
        <div>
            <h1 style={{background: props.color2, color: props.color1}}>The word is: {props.word}</h1>
        </div>
    )
}

export default WordStyle
