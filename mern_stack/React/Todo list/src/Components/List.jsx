import React,{useState} from 'react'

const List = (props) => {
  const [inputList, setInputList] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    props.addTodo(inputList)
    console.log(inputList)
    setInputList("")
  }
  return (
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" placeholder="Enter your task" value={inputList} onChange={e=>setInputList(e.target.value)} />
        <button type="submit">Add</button>
      </form>
  )
}

export default List