import React, { useState } from 'react';

const ColorPicker = props => {
  const [color, setColor] = useState('red');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(color)
    setColor(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='color' className='d-flex flex-row w-50 mx-auto'>
        Color:
        <input
          type='text'
          id='color'
          className='form-control'
          name='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type='submit' className='input-group-text' />
      </label>
    </form>
  );
};

export default ColorPicker;
