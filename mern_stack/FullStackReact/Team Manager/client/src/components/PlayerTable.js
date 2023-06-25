import React,{useState} from 'react'
import PopUpDelete from './PopUpDelete';

const PlayerTable = (props) => {
    const [deletePlayer, setDeletePlayer] = useState({status:false, player:{}})
    const deleteButton = (player) => {
        setDeletePlayer({status:true, player:player})
    }
        

    return (
        <>
            {deletePlayer.status ? (
      <PopUpDelete
        setDeletePlayer={setDeletePlayer}
        player={deletePlayer.player}
        players={props.players}
        setPlayers={props.setPlayers}
      />
    ) : null}
        
        <table className='table border p-3 border-3'>
            <thead>
                <tr >
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.players.map((player, idx) => (
                    <tr key={idx}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>
                            <button className="btn btn-sm btn-danger" onClick={()=>deleteButton(player)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>


        </table>
        </>

    )
}

export default PlayerTable