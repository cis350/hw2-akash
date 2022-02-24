import React from 'react';

/* eslint react/prop-types: 0 */

function EndGame({ finalScore }) {
  const keys = Object.keys(localStorage);
  let i = 0;
  let res = [];
  while (i < keys.length) {
    res.push([keys[i], localStorage.getItem(keys[i])]);
    i += 1;
  }
  res = res.sort((a, b) => b[1] - a[1]);
  const leaders = res.slice(0, 5);
  return (
    <div className="text-3xl">
      Leaderboard:
      <div>
        Final Score:
        {finalScore}
      </div>
      {leaders.map((x) => (
        <div>
          {x[0]}
          :
          {x[1]}
        </div>
      ))}
    </div>
  );
}

export default EndGame;
