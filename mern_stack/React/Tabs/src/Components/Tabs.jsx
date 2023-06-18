import React from 'react';

const Tabs = (props) => {
  return (
    <div>
      {props.tabs.map((tab,i) => {
        return (
          <button key={tab.title} onClick={()=>{props.clickTab(i)}}>
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
