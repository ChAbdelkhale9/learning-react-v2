import { useState } from 'react';
import Casi from './Casi.jsx';

const TicTacToe = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [casi, setCasi] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [win, setWin] = useState(false);
  const [game, setGame] = useState(true);
  const handleClick = (row, col) => {
    setIsXTurn((prev) => !prev);
    const newCasi = [...casi];
    newCasi[row][col] = isXTurn ? 'X' : 'O'; // Set cell value to 'X' or 'O'
    setCasi(newCasi);
    setWin(checkWin(row, col)); // Set win state based on checkWin result
  };

  function handleReset() {
    // Reset the casi array to its initial empty state
    setCasi([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);

    // Set isXTurn back to true to reset the turn to X
    setIsXTurn(true);

    // Set win state back to false
    setWin(false);
    setGame((g) => {
      
      return !g
    });
  
  }


  function checkWin(r, c) {
    if ((null !== casi[r][c]) && (casi[r][0] === casi[r][c]) && (casi[r][1] === casi[r][c]) && (casi[r][2] === casi[r][c])) {
      return true
    }

    if ((null !== casi[r][c]) && (casi[0][c] === casi[r][c]) && (casi[1][c] === casi[r][c]) && (casi[2][c] === casi[r][c])) {
      return true
    }
    if ((null !== casi[0][0]) && (casi[0][0] === casi[1][1]) && (casi[0][0] === casi[2][2])) {
      return true
    }
    if ((null !== casi[0][2]) && (casi[0][2] === casi[1][1]) && (casi[0][2] === casi[2][0])) {
      return true
    }
    return false

  }


  return (
    <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
      <div className="grid grid-cols-3 w-[400px] gap-[20px] bg-black">
        {game === true && casi.map((row, rowIndex) =>
          row.map((_, colIndex) => (
            <Casi
              key={`${rowIndex}-${colIndex}`}
              clicked={isXTurn}
              turn={() => handleClick(rowIndex, colIndex)}
            />
          ))
        )}
        {game !== true && casi.map((row, rowIndex) =>
          row.map((_, colIndex) => (
            <Casi
              key={`${rowIndex}-${colIndex}`}
              clicked={isXTurn}
              turn={() => handleClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      {win === true && <div className=' bg-slate-600 fixed w-full h-full flex   justify-center items-start bg-opacity-30 pt-10 text-4xl '><div className='flex items-center justify-center text-center  '><p className='  text-black'>{isXTurn ? 'O' : 'X'} WIN </p>
      </div></div>}<button onClick={handleReset} className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          reset
        </span>
      </button>
    </div>
  );
};

export default TicTacToe;