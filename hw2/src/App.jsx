import React, { useState } from 'react';
import Question from './Question';

function App() {
  const [userName, setUserName] = useState('');
  const [currUser, setcurrUser] = useState('');
  const [bestScore, setBestScore] = useState(0);
  function initalizeUser(inputName) {
    if (localStorage.getItem(inputName) === null) {
      localStorage.setItem(inputName, 0);
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
    <div className="flex flex-col min-h-screen justify-center items-center text-center">
      <h1 className="mb-8 text-3xl">Guess the Celebrity Quiz</h1>
      {(currUser === '') ? (
        <div className="flex flex-col w-1/4">
          <input placeholder="Enter Username" type="text" className="border-2 p-4 bg-slate-300" onChange={(e) => { setUserName(e.target.value); }} />
          {!userName.match(/^[0-9a-zA-Z]+$/) && userName !== '' && <div className="bg-slate-300 mt-6 w-1/2 m-auto"> invalid name!</div>}
          <button
            type="submit"
            onClick={() => { initalizeUser(userName); }}
            disabled={!userName.match(/^[0-9a-zA-Z]+$/) && userName !== ''}
            className="rounded-full border-2 mt-10 py-4 w-1/2 m-auto bg-slate-300"
          >
            Start
          </button>
        </div>
      ) : (
        <div>
          <Question userName={currUser} bestScore={bestScore} />
          <button
            type="button"
            className="rounded-full border-2 mt-10 px-36 py-4 m-auto bg-red-600"
            onClick={() => { deleteUser(); }}
          >
            Delete My Account
          </button>
          <br />
          <button
            type="button"
            className="rounded-full border-2 mt-10 px-36 py-4 m-auto bg-blue-600"
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
