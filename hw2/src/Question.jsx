import React, { useEffect, useState } from 'react';
import EndGame from './EndGame';

/* eslint react/prop-types: 0 */
const questions = require('./questions.json');

function Question({ userName, bestScore }) {
  const [id, setId] = useState(Math.floor(Math.random() * 10));
  const [question, setQuestion] = useState(questions[id]);
  const [used, setUsed] = useState([id]);
  const [answered, setAnswered] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [newBestScore, setNewBestScore] = useState(0);
  const [buttonColor1, setButtonColor1] = useState('bg-slate-300');
  const [buttonColor2, setButtonColor2] = useState('bg-slate-300');
  const [buttonColor3, setButtonColor3] = useState('bg-slate-300');
  const [buttonColor4, setButtonColor4] = useState('bg-slate-300');
  const [overallBestScore, setoverallBestScore] = useState(0);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    let i = 0;
    const res = [];
    while (i < keys.length) {
      res.push(localStorage.getItem(keys[i]));
      i += 1;
    }
    const leader = Math.max(...res);
    if (leader !== null) {
      setoverallBestScore(leader);
    }
  }, []);

  function correctChoice(e) {
    if (!answered) {
      if (e.currentTarget.dataset.id === question.answer) {
        const x = currScore + 1;
        setCurrScore(x);
      }
      setAnswered(true);
    }
  }
  useEffect(() => {
    if (currScore > localStorage.getItem(userName)) {
      localStorage.setItem(userName, currScore);
      setNewBestScore(currScore);
    }
  }, [currScore]);

  function reset() {
    let x = Math.floor(Math.random() * 10);
    while (used.includes(x)) {
      x = Math.floor(Math.random() * 10);
    }
    setId(x);
    setQuestion(questions[x]);
    setAnswered(false);
    setUsed([...used, x]);
    setButtonColor1('bg-slate-300');
    setButtonColor2('bg-slate-300');
    setButtonColor3('bg-slate-300');
    setButtonColor4('bg-slate-300');
  }
  return (
    <div>

      {used.length === 10 && answered ? (<EndGame />) : (
        <div className="flex flex-col items-center">
          <img src={question.image} alt="celebrity" className="w-[600px] h-[400px]" />
          <div className="grid grid-cols-2 grid-rows-2 gap-x-72">
            <button
              data-id={question.choices[0]}
              type="button"
              className={`rounded-full border-2 mt-10 px-36 py-4 m-auto ${buttonColor1}`}
              onClick={(e) => {
                correctChoice(e);
                if (e.currentTarget.dataset.id === question.answer) {
                  setButtonColor1('bg-green-300');
                } else {
                  setButtonColor1('bg-red-300');
                }
              }}
            >
              <p>{question.choices[0]}</p>
            </button>
            <button
              data-id={question.choices[1]}
              type="button"
              className={`rounded-full border-2 mt-10 px-36 py-4 m-auto ${buttonColor2}`}
              onClick={(e) => {
                correctChoice(e);
                if (e.currentTarget.dataset.id === question.answer) {
                  setButtonColor2('bg-green-300');
                } else {
                  setButtonColor2('bg-red-300');
                }
              }}
            >
              {question.choices[1]}
            </button>
            <button
              data-id={question.choices[2]}
              type="button"
              className={`rounded-full border-2 mt-10 px-36 py-4 m-auto ${buttonColor3}`}
              onClick={(e) => {
                correctChoice(e);
                if (e.currentTarget.dataset.id === question.answer) {
                  setButtonColor3('bg-green-300');
                } else {
                  setButtonColor3('bg-red-300');
                }
              }}
            >
              {question.choices[2]}
            </button>
            <button
              data-id={question.choices[3]}
              type="button"
              className={`rounded-full border-2 mt-10 px-36 py-4 m-auto ${buttonColor4}`}
              onClick={(e) => {
                correctChoice(e);
                if (e.currentTarget.dataset.id === question.answer) {
                  setButtonColor4('bg-green-300');
                } else {
                  setButtonColor4('bg-red-300');
                }
              }}
            >
              {question.choices[3]}
            </button>
          </div>
          {used.length === 10 && answered && (
            <EndGame />
          )}
          <div>
            Current Score:
            {currScore}
            <br />
            Best Score:
            {used.length === 10 && answered ? newBestScore : bestScore}
            <br />
            Overall Best Score:
            {overallBestScore}
          </div>
          {used.length < 10 && answered && (
            <button
              type="button"
              className="rounded-full border-2 mt-10 px-36 py-4 m-auto bg-blue-600"
              onClick={() => { reset(); }}
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Question;
