import React, { useState } from 'react';
import ColorPicker from './Components/ColorPicker';    
import ColorBox from './Components/ColorBox';
import './bs.css';
function App() {
    const [colors, setColors] = useState([]);
    const addColor = (color)=>{
        setColors([{
            backgroundColor:color
        }]);
    }
    return (
        <div className='container'>
            <ColorPicker addColor={addColor} />
            <ColorBox colors={colors}/>
        </div>
    );
}
    
export default App;

