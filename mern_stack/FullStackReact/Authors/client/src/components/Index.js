import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <h1>Favorite authors</h1>
        <Link to="/new">Add an author</Link>
        <p>We have quotes by:</p>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Michael Jordan</td>
                    <td>

                    </td>
    </div>
  )
}

export default Index