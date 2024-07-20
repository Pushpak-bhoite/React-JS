import React from 'react';
import MyContext from './CreateContext';

const NoteContext = (props) => {
  let state = {
    'name': 'Jay Shree Ram',
    'age': '16',
  };
                             
  return (
    <MyContext.Provider value={state}>
      {props.children}
    </MyContext.Provider>
  );
};

export default NoteContext;
