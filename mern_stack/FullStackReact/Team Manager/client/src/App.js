import './App.css';
import {Route, Routes,Link} from 'react-router-dom';
import ManagePlayer from './views/ManagePlayer';
import ManagePlayerStatus from './views/ManagePlayerStatus';
import axios from 'axios';
import React,{useEffect, useState} from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err))
    console.log(players)
  }, [])

  return (
    <div className="App">
      <nav className='d-flex gap-3 m-3'>
        <Link to="/players/list"><h2>Manage Players </h2></Link> <h2>|</h2>
        <Link to="/status/game/1"><h2>Manage Player Status</h2></Link>
      </nav>
      <Routes>
        <Route path="/players/*" element={<ManagePlayer players={players} setPlayers={setPlayers}/>}/>
        <Route path="/status/game/:id" element={<ManagePlayerStatus players={players} setPlayers={setPlayers} />}/>
      </Routes>

    </div>
  );
}

export default App;
