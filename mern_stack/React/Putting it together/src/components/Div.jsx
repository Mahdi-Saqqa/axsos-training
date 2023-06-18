import React,{useState} from 'react'

const Div = (props) => {
  const [age,setAge] = useState(props.age)
  return (
    <div>
    <h1>{props.name}</h1>
    <p>Age:  {age}</p>
    <p>Hair Color: {props.color}</p>
    <button onClick={()=>setAge(age+1)}>Birthday Button for {props.name}</button>
</div>
  )
}

export default Div
