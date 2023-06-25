import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import AuthorData from '../components/AuthorData'
import axios from 'axios'
const AddAuthor = () => {
  const navigate = useNavigate()
  const createAuthor = name => {
    axios.post('http://localhost:8000/api/authors', {name:name})
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }


  return (
    <div>
      <Link to="/">Home</Link>
      <p>Add a new author:</p>
      <AuthorData formAction={createAuthor}/>
    </div>
  )
}

export default AddAuthor