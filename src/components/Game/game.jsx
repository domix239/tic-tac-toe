import React, { useEffect, useState } from "react";
import { Board } from "../Board/board";
import { Square } from "../Square/square";
import "../../index.css";
import { calculateWinner } from "../Board/helper";

export const Game = () => {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState({
    squares: Array(9).fill(null),
  });
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState("Next player: X");

  useEffect(() => {
    const hst = history;
    const current = hst[hst.length - 1];
    const winner = calculateWinner(current);

    console.log("CURRENT", current);
    if (winner) setStatus(`Winner: ${winner}`);
    else {
      setStatus(`Next player: ${isX ? "X" : "O"}`);
    }
  }, [isX]);

  const handleClick = (i) => {
    const sqrs = history.squares.slice();

    if (calculateWinner(sqrs) || sqrs[i]) {
      return;
    }

    sqrs[i] = isX ? "X" : "O";
    //setSquares(sqrs);
    setIsX(!isX);
    setStatus("Next player: " + (isX ? "X" : "O"));
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
