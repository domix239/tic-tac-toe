import React, { useEffect } from "react";
import { Square } from "../Square/square";
import "../../index.css";

export const Board = (props) => {
  const { squares, onClick, winIndex } = props;
  const col = 3;
  const row = 3;

  const renderSquare = (val, idx, isMarked) => {
    return (
      <Square
        key={"square_" + idx}
        value={val}
        onClick={() => onClick(idx)}
        isMarked={isMarked}
      />
    );
  };

  return (
    <div>
      {[...Array(row)].map((_, ri) => {
        return (
          <div key={"row_" + ri} className="board-row">
            {[...Array(col)].map((_, ci) => {
              let idx = (ri === 1 ? ri + 2 : ri === 2 ? ri + 4 : ri) + ci;
              let isMarked = false;
              if (winIndex && winIndex.includes(idx)) isMarked = true;
              return renderSquare(squares[idx], idx, isMarked);
            })}
          </div>
        );
      })}
    </div>
  );
};
