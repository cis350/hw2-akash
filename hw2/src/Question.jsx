import React, { useEffect, useState } from 'react';
import EndGame from './EndGame';

/* eslint react/prop-types: 0 */
const questions = require('./questions.json');

function Question({ userName, bestScore }) {
  const [id, setId] = useState(Math.floor(Math.random() * 10));
  const [question, setQuestion] = useState(questions[id]);
  const [used, setUsed] = useState([id]);
  const [correct, setCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [newBestScore, setNewBestScore] = useState(0);
  function correctChoice(e) {
    if (!answered) {
      if (e.currentTarget.dataset.id === question.answer) {
        setCorrect(true);
        const x = currScore + 1;
        setCurrScore(x);
      } else {
        setCorrect(false);
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
    setCorrect(null);
    setAnswered(false);
    setUsed([...used, x]);
  }
  return (
    <div>
      {used.length === 10 && answered ? (<EndGame />) : (
        <div>
          <img src={question.image} alt="" />
          <button
            data-id={question.choices[0]}
            type="button"
            style={{ border: '1px solid #d66', margin: '5px' }}
            onClick={(e) => { correctChoice(e); }}
          >
            {question.choices[0]}
          </button>
          <button
            data-id={question.choices[1]}
            type="button"
            style={{ border: '1px solid #d66', margin: '5px' }}
            onClick={(e) => { correctChoice(e); }}
          >
            {question.choices[1]}
          </button>
          <button
            data-id={question.choices[2]}
            type="button"
            style={{ border: '1px solid #d66', margin: '5px' }}
            onClick={(e) => { correctChoice(e); }}
          >
            {question.choices[2]}
          </button>
          <button
            data-id={question.choices[3]}
            type="button"
            style={{ border: '1px solid #d66', margin: '5px' }}
            onClick={(e) => { correctChoice(e); }}
          >
            {question.choices[3]}
          </button>
          {correct && <div> Correct!</div>}
          {correct === false && <div> Incorrect!</div>}
          {used.length < 10 && answered && (
            <button
              type="button"
              style={{ border: '1px solid #d66', margin: '5px' }}
              onClick={() => { reset(); }}
            >
              Next Question
            </button>
          )}
          {used.length === 10 && answered && (
            <EndGame />
          )}
          <div>
            Current Score:
            {currScore}
            <br />
            Best Score:
            {used.length === 10 && answered ? newBestScore : bestScore}
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
