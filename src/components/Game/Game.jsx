import React, { useState } from 'react'
import './Game.css'
// import ButtonGame from '../Button/ButtonGame'

function ButtonGame({ value, onSquareClick }) {
  return (
    <div id="button-game">
      <button
        className="square glow-on-hover"
        id="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
};





const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick (i){
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }

   const winner = calculateWinner(squares);
   let statuss;
   if (winner) {
     statuss = "Winner: " + winner;
   } else {
     statuss = "Next player: " + (xIsNext ? "X" : "O");
   }


    function refreshPage() {
      window.location.reload(false);
    }

  return (
    <div className="wrapper">
      <div className="ticTacToe">Tic Tac Toe</div>
      <div className="status">{statuss}</div>
      <div className="row-div">
        <ButtonGame value={squares[0]} onSquareClick={() => handleClick(0)} />
        <ButtonGame value={squares[1]} onSquareClick={() => handleClick(1)} />
        <ButtonGame value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="row-div">
        <ButtonGame value={squares[3]} onSquareClick={() => handleClick(3)} />
        <ButtonGame value={squares[4]} onSquareClick={() => handleClick(4)} />
        <ButtonGame value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="row-div">
        <ButtonGame value={squares[6]} onSquareClick={() => handleClick(6)} />
        <ButtonGame value={squares[7]} onSquareClick={() => handleClick(7)} />
        <ButtonGame value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button className='refresh glow-on-hover' onClick={refreshPage}>
        Start Again!
      </button>
    </div>
  );
}

export default Game

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}