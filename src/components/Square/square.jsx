import React, { useEffect, useState } from "react";
import "../../index.css";

export const Square = (props) => {
  const [player, setPlayer] = useState(null);

  const { value, onClick } = props;

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
