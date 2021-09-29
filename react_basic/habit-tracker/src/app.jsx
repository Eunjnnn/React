import React from 'react';
import './app.css';

function App() {
  const name = 'eunjin';
  //const name = 'undefined'; 아래 자바스크립트 부분 출력 안됨
  return (
    <>
      <h1>Hello</h1>
      {name && <h1> Hello! {name} :) </h1>}
      {['✸', '🍅'].map(item => 
          (<h1>{item}</h1>
        ))}
    </>
  );
}

export default App;
