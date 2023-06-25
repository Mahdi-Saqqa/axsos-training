import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';
import PlayerForm from '../components/PlayerForm';
import PopUpDelete from '../components/PopUpDelete';


const ManagePlayer = (props) => {

  return (
    <div className='container border p-3 border-3'>
        <nav className='d-flex gap-3  mb-3'>
            <Link to="/players/list"><h2>List </h2></Link> <h2>|</h2>
            <Link to="/players/addplayer"><h2>Add Player</h2></Link>
        </nav>
        
        <Routes>
            <Route path="/list" element={<PlayerTable players={props.players}  setPlayers={props.setPlayers}/>}/>
            <Route path="/addplayer" element={<PlayerForm players={props.players} setPlayers={props.setPlayers}/>}/>
        </Routes>
    </div>
  )
}

export default ManagePlayer