import React from 'react';
import appStyle from './App.module.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className={appStyle.App}>
      <Header />
      <div className={appStyle.Container}>
        <Navigation />
        <Main>
        <div className={appStyle.Container}>
        <SubContents />
            <SubContents />
            <SubContents />
        </div>
          <Advertisement />
        </Main>

      </div>
    </div>
  );
}

export default App;
