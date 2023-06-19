import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
    const { variable, color, color2 } = useParams()
    let text
    if (isNaN(variable)) {
        text = `The word is : ${variable}`
    } else {
        text = `The number is : ${variable}`
    }
    return (
        <div style={{ color: color, backgroundColor: color2 }}>
            {text}
        </div>
    )
}

export default Dynamic