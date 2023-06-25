import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthorData from '../components/AuthorData'
import axios from 'axios'
const UpdateAuther = (props) => {
    const  navigate  = useNavigate();
    const { id } = useParams();
    const updateAuthor = (name) => {
        console.log(id);
        console.log(name);
        axios.put('http://localhost:8000/api/authors/' + id, {name: name})
            .then(res =>navigate('/'))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <Link to="/">Home</Link>
        <h1>UpdateAuther</h1>
        <AuthorData formAction={updateAuthor} />
    </div>
  )
}

export default UpdateAuther