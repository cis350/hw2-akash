import React from 'react';

function EndGame() {
  const keys = Object.keys(localStorage);
  let i = 0;
  let res = [];
  while (i < keys.length) {
    res.push([keys[i], localStorage.getItem(keys[i])]);
    i += 1;
  }
  res = res.sort((a, b) => b[1] - a[1]);
  const leaders = res.slice(0, 5);
  console.log(leaders);
  return (
    <div>
      Leaderboard:
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
