import React from 'react';

const ColorBox = (props) => {
  return (
    <div className='row gap-3 mt-3' >
      {props.colors.map((color) => (
        <div 
          className=" col-3  h-bs  my-4  text-center"
          style={color}
        >
        </div>
      ))}
    </div>
  );
};

export default ColorBox;
