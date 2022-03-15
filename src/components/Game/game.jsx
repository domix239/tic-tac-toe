import React, { useEffect, useState } from "react";
import { Board } from "../Board/board";
import "../../index.css";
import { calculateWinner } from "./helper";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isX, setIsX] = useState(true);
  const [step, setStep] = useState(0);
  const winner = calculateWinner(history[step]);

  useEffect(() => setHistory(history.slice(0, step + 1)), [step]);

  const handleClick = (i) => {
    const prevMoves = history.slice(0, step + 1);
    const current = prevMoves[step];
    const sqrs = [...current];
    if (winner || sqrs[i]) return;
    sqrs[i] = isX ? "X" : "O";
    setHistory([...prevMoves, sqrs]);
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
        <Board squares={history[step]} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>
          {winner
            ? "Winner: " + winner
            : !history[step].includes(null)
            ? "Its a draw!"
            : "Next player: " + (isX ? "X" : "O")}
        </div>
        <ol>
          {history.map((_, move) => {
            return (
              <li key={`${move}`}>
                <button onClick={() => jumpTo(move)}>
                  {move ? `Go to move # ${move}` : "Go to game start"}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
