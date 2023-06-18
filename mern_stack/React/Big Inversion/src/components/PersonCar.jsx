import React from 'react'

const PersonCar = (props) => {
  return (
    <div>
                <h1>{props.name}</h1>
          <p>Age:  {props.age}</p>
          <p>Hair Color: {props.color}</p>
    </div>
  )
}

export default PersonCar
