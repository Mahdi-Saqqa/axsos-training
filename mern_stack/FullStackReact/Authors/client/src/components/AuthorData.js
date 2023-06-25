import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorData = (props) => {
    const [author, setAuthor] = useState([]);
    const navegate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.formAction(author);
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" value={author} onChange={(e)=>{setAuthor(e.target.value)}} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
export default AuthorData