import React, { useState } from "react";
import axios from 'axios';

const Button = (props) => {
  const [i, setI] = useState(0);

  const fetchData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=' + (i - 0) * 20 + '&limit=' + (i + 1) * 20)
      .then(response => {
        props.addData(response.data.results);
        setI(i + 1);
      });
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={fetchData}>Fetch Pokemons</button>
    </div>
  );
};

export default Button;
