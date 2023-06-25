import React,{useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Delete from '../components/Delete';
const Main = () => {
  const [authors, setAuthors] = useState([]);
  const removeAuthor = (id) => {
    console.log(id);

    setAuthors(authors.filter(author => author._id !== id));
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')

      .then(res => {
        setAuthors(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  return (
    <div>
      <Link to="/new">Add an author</Link>
      <h3>We have quotes by:</h3>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx) => {
            return (
              <tr>
              <td>{author.name}</td>
              <td>
                <Link to={`./edit/${author._id}`}>Edit</Link>
                <Delete successCallback={id=>{removeAuthor(id)}} autherId={author._id}/>
              </td>
            </tr>
              );
        }
      )}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
