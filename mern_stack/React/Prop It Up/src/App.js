import React, { Component } from 'react';
import './bs.css';
import Div from './components/Div';
 class App extends Component {
  render() {
    return (
      <div className='mx-auto mt-3 w-25'>
            <Div name={"Smith, John"} age={88} color={"Brown"} />
            <Div name={"Fillmore, Millard"} age={50} color={"Brown"} />
            <Div name={"Smith, Maria"} age={62} color={"Brown"} />
      </div>
    )
  }
}
export default App;