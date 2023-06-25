import React from 'react'
import axios from 'axios';

const PopUpDelete = (props) => {
    const deletePlayer = () => {
        axios.delete('http://localhost:8000/api/players/' + props.player._id)
            .then(res => {
                console.log(res)
                props.setPlayers(props.players.filter(player => player._id !== props.player._id))
                props.setDeletePlayer({status:false, player:{}})
            }
            )
            .catch(err => console.log(err))

    }
    const cancelDelete = () => {
        console.log('cancel delete')
        props.setDeletePlayer({status:false, player:{}})

    }
  return (
    <div className='popUpDelete'>
        <p className='text-center'>Are you sure you want to delete {props.player.name}?</p>
        <div className='d-flex justify-content-around w-100'>
            <button className='btn btn-danger' onClick={deletePlayer}>Yes</button>
            <button className='btn btn-secondary' onClick={cancelDelete}>No</button>
        </div>
    </div>
  )
}

export default PopUpDelete