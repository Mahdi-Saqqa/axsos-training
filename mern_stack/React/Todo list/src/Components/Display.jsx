import React from 'react'

const Display = (props) => {

    return (
        <div>
            {
                props.list.map((item,idx)=>
                        {                
                            const Style={
                                textDecoration: item.status ? "line-through" : "none"
                            }
        
                            return(
                        <p key={idx} style={Style}>
                        <input type="checkbox"  value={item.status} onChange={()=>props.checkBox(idx)}/>
                        {item.todo}
                    <button onClick={()=>{props.deleteTodo(idx)}}>delete</button>
                    </p>)}
                )
            }
        </div>
)
}
export default Display