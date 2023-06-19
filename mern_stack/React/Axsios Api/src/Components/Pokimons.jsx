import React from 'react';

const Pokimons = (props) => {
  console.log(props.responseData)
  if (props.responseData.length <= 0) {
    return null;
  } else {
    return (
      <div style={styles.container}>
        {props.responseData[0].map((d) => {
          return (
            <div key={d.name} style={styles.item}>
              {d.name}
            </div>
          );
        })}
      </div>
    );
  }
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    margin: '5px',
    borderRadius: '4px',
    textAlign: 'center',
  },
};

export default Pokimons;
