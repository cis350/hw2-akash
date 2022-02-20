import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [bestScore, setScore] = useState(0);
  function initalizeUser(inputName) {
    if (localStorage.getItem(inputName) === null) {
      localStorage.setItem(inputName, 0);
    } else {
      setScore(localStorage.getItem(inputName));
    }
    console.log(bestScore);
  }
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>Username: </div>
        <input type="text" style={{ border: '1px solid #d66' }} onChange={(e) => { setUserName(e.target.value); }} />
      </div>
      {!userName.match(/^[0-9a-zA-Z]+$/) && userName !== '' && <div> invalid name!</div>}
      <button
        type="submit"
        style={{ border: '1px solid #d66' }}
        onClick={() => { initalizeUser(userName); }}
        disabled={!userName.match(/^[0-9a-zA-Z]+$/) && userName !== ''}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
