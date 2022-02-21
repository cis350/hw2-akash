import React, { useState } from 'react';

/* eslint-disable global-require */
const questions = require('./questions.json');
/* eslint-enable global-require */

function Question() {
  const [id, setId] = useState(Math.floor(Math.random() * 10));
  const [question, setQuestion] = useState(questions[id]);
  const [used, setUsed] = useState([id]);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);
  function correctChoice(e) {
    if (!answered) {
      if (e.currentTarget.dataset.id === question.answer) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }
      setAnswered(true);
      setCount(count + 1);
    }
  }
  function reset() {
    while (used.includes(id)) {
      setId(Math.floor(Math.random() * 10));
    }
    setQuestion(questions[id]);
    setCorrect(null);
    setAnswered(false);
    setUsed(used.append(id));
  }
  return (
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
      {answered && (
        <button
          type="button"
          style={{ border: '1px solid #d66', margin: '5px' }}
          onClick={() => { reset(); }}
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default Question;
