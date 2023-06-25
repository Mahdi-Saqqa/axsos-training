import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Author from './views/AddAuthor';
import AddAuthor from './views/AddAuthor';
import UpdateAuther from './views/UpdateAuther';
function App() {
  return (
    <div className="App">
          <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<AddAuthor />} />
        <Route path="/edit/:id" element={<UpdateAuther />} />
      </Routes>
    </div>  
  );
}

export default App;
