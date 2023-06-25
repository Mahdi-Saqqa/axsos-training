import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayerForm = (props) => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [btnClasses, setBtnClasses] = useState(['btn','btn-success','w-25']);
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/players', {
      name: name,
      position: position}
    )
      .then(res => {
        console.log(res)
        props.setPlayers([...props.players, res.data])
        navigate('/players/list')
      }
      )
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.errors.name)
      })
  }
  useEffect(() => {
    console.log(name)
    if(name.length >= 2){
      setBtnClasses(['btn','btn-success','w-25']);
      setErrors('');
    }else{
      setBtnClasses(['btn','btn-success','w-25','disabled']);
    }
    if(name.length > 0 && name.length < 2){
      setErrors({playerPosition: {message: 'Name must be at least 2 characters'}});
    }
    else{
      setErrors('');
    }
  }, [name])
  return (
    <form className='d-flex flex-column gap-4 m-5 border border-3 p-5' onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="playerName">Player Name: </label>
        <input type="text" name="playerName" id="playerName" className="form-control" 
        value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      {errors.playerPosition ? <p className='text-danger'>{errors.playerPosition.message}</p> : ''}
      <div className="form-group">
        <label htmlFor="playerPosition">Preferred Position: </label>
        <input type="text" name="playerPosition" id="playerPosition" className="form-control"
        value={position} onChange={(e)=>setPosition(e.target.value)}
        />
      </div>
      <div className="form-group d-flex justify-content-end">
        <input type="submit" value='Add' className={btnClasses.join(' ')}/>
      </div>
    </form>
  )
}

export default PlayerForm