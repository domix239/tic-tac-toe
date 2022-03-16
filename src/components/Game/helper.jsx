import { useEffect, useState } from "react";

export const useCalcWinner = () => {
  const [winnerLanes, setWinnerLanes] = useState([]);
  const [winner, setWinner] = useState("");

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = (squares) => {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        setWinnerLanes([a, b, c]);
      }
    }
  };

  return { winner, winnerLanes, checkWin };
};
