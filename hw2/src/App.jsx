import React, { useState } from 'react';
import Question from './Question';

function App() {
  const [userName, setUserName] = useState('');
  const [currUser, setcurrUser] = useState('');
  const [bestScore, setBestScore] = useState(0);
  function initalizeUser(inputName) {
    if (localStorage.getItem(inputName) === null) {
      localStorage.setItem(inputName, 0);
    } else {
      const x = localStorage.getItem(inputName);
      console.log(x);
    }
    setcurrUser(inputName);
    setBestScore(localStorage.getItem(userName));
  }
  function deleteUser() {
    localStorage.removeItem(currUser);
    setcurrUser('');
  }
  function restartGame() {
    setcurrUser('');
  }
  return (
    <div>
      {(currUser === '') ? (
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
      ) : (
        <div>
          <Question userName={currUser} bestScore={bestScore} />
          <button
            type="button"
            style={{ border: '1px solid #d66' }}
            onClick={() => { deleteUser(); }}
          >
            Delete My Account
          </button>
          <br />
          <button
            type="button"
            style={{ border: '1px solid #d66' }}
            onClick={() => { restartGame(); }}
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
