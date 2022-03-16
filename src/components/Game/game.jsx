import React, { useEffect, useState } from "react";
import { Board } from "../Board/board";
import "../../index.css";
import { calculateWinner, useCalcWinner } from "./helper";

export const Game = () => {
  const locations = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  const [history, setHistory] = useState({
    squares: [Array(9).fill(null)],
    location: [],
  });
  const [locHistory, setLocHistory] = useState();
  const [isX, setIsX] = useState(true);
  const [step, setStep] = useState(0);
  const { winner, winnerLanes, checkWin } = useCalcWinner(
    history.squares[step]
  );
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    checkWin(history.squares[step]);
    //setHistory(history.slice(0, step + 1));    // to remove History up to selected jump
  }, [step]);

  useEffect(() => console.log("winner: ", winner, winnerLanes), [winner]);

  const handleClick = (i) => {
    const prevMoves = history.squares.slice(0, step + 1);
    const current = prevMoves[step];
    const sqrs = [...current];
    if (winner || sqrs[i]) return;
    sqrs[i] = isX ? "X" : "O";
    setHistory({
      squares: [...prevMoves, sqrs],
      location: [...history.location, locations[i]],
    });
    setStep(prevMoves.length);
    setIsX(!isX);
  };

  const jumpTo = (move) => {
    setStep(move);
    setIsX(move % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history.squares[step]}
          onClick={(i) => handleClick(i)}
          winIndex={winnerLanes}
        />
      </div>
      <div className="game-info">
        <div>
          {winner
            ? "Winner: " + winner
            : !history.squares[step].includes(null)
            ? "Its a draw!"
            : "Next player: " + (isX ? "X" : "O")}
        </div>
        <ol reversed={isReversed}>
          {history.squares.map((_, move) => {
            let flexMove = isReversed
              ? history.squares.length - move - 1
              : move;
            return (
              <li div={`li-hist ${flexMove}`} key={`li-hist ${flexMove}`}>
                <button onClick={() => jumpTo(flexMove)}>
                  {flexMove
                    ? `Go to move # ${flexMove} (${
                        history.location[flexMove - 1]
                      })`
                    : "Go to game start"}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="reverse-history">
        <button
          onClick={() => {
            setIsReversed(!isReversed);
          }}
        >
          Reverse History
        </button>
      </div>
    </div>
  );
};
