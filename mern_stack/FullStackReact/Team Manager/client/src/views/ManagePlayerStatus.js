import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ManagePlayerStatus = (props) => {
  let { id } = useParams();
  const changeStatus = (player, status) => {
    player.playing[id - 1] = status;
    axios.put(`http://localhost:8000/api/players/${player._id}`, player)
      .then(res => {
        console.log(res)
        props.setPlayers(props.players.map(p => p._id === player._id ? res.data : p)
        )
      }
      )
      .catch(err => console.log(err))

     
  }
  return (
    <div className='container border p-3'>
      <h1>Player Status - Game {id}</h1>
      <nav className='h2 d-flex justify-content-center gap-3 '>
        <a href="/status/game/1">Game 1</a> |
        <a href="/status/game/2">Game 2</a> |
        <a href="/status/game/3">Game 3</a>
      </nav>
      <table className='table border p-3 border-3'>
        <thead>
          <tr >
            <th>Team Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, idx) => (
            <tr key={idx}>
              <td>{player.name}</td>
              <td className='d-flex gap-3'>
                <button
                  className={
                    "btn btn-sm " +
                    (player.playing[id - 1] === "y" ? "btn-success" : "btn-outline-success")
                  }
                  onClick={() =>changeStatus(player, "y")}
                >
                  Playing</button>
                  <button
                  className={
                    "btn btn-sm " +
                    (player.playing[id - 1] === "n" ? "btn-danger" : "btn-outline-danger")
                  }
                  onClick={() =>changeStatus(player, "n")}
                >
                Not Playing</button>
                <button
                  className={
                    "btn btn-sm " +
                    (player.playing[id - 1] === "u" ? "btn-warning" : "btn-outline-warning")
                  }
                  onClick={() =>changeStatus(player, "u")}
                >
                Undecided</button>

              </td>
            </tr>
          ))}
        </tbody>


      </table>
    </div>
  )
}

export default ManagePlayerStatus