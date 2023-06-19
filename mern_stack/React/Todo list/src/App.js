import './App.css';
import React,{useState} from 'react';
import List from './Components/List';
import Display from './Components/Display'
function App() {
  const [list,setList] = useState([])
  const addTodo = (todo)=>{
    console.log(todo)
    setList([...list,{
      todo:todo,
      status:false
    }])
  }
  const checkBox=(idx)=>{
    setList(list.map((todo,i)=>{
      if(i===idx){
        return{
          ...todo,
          status:!todo.status
        }
      }
      return todo
    }))
  }
  const deleteTodo=(idx)=>{
    setList(list.filter((todo,i)=>i!==idx))
  }
  return (
    <div className="App">
      <List addTodo={addTodo}/>
      <Display list={list} deleteTodo={deleteTodo} checkBox={checkBox}/>
    </div>
  );
}

export default App;