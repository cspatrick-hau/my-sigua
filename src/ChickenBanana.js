import React, { useState } from 'react';
import './App.css';

const bananaImg = 'https://www.shutterstock.com/image-vector/cute-banana-fruit-cartoon-vector-600nw-2437965419.jpg';
const chickenImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0s90cGwDKck1pWFCsViD4OKiSK1kTub2HOw&s';

const roastedChickenGif = 'https://tastecooking.com/wp-content/uploads/2020/08/Article-Rotisserie-Chicken.gif';
const monkeyGif = 'https://media1.tenor.com/m/neLRRtOvtm4AAAAd/fate-monkey.gif'; 

const ROWS = 6;
const COLS = 6;

function generateBoard() {
  return Array(ROWS * COLS).fill(null).map(() => ({
    isChicken: Math.random() < 0.5,
    isRevealed: false,
  }));
}

function ChickenBanana() {
  const [board, setBoard] = useState(generateBoard);
  const [playerChoice, setPlayerChoice] = useState(null); 
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [loser, setLoser] = useState(null); 

  function revealCell(idx) {
    if (gameOver || !playerChoice) return; 
    const cell = board[idx];
    if (cell.isRevealed) return;

    if ((playerChoice === 'chicken' && !cell.isChicken) ||
        (playerChoice === 'banana' && cell.isChicken)) {
      setGameOver(true);
      setLoser(playerChoice);
      setMessage(`You clicked the wrong one! You lose.`);
      return;
    }

    const newBoard = [...board];
    newBoard[idx] = { ...cell, isRevealed: true };
    setBoard(newBoard);


    const remaining = newBoard.filter(c => c.isChicken === (playerChoice === 'chicken') && !c.isRevealed);
    if (remaining.length === 0) {
      setGameOver(true);
      setMessage(`Congrats! You revealed all your ${playerChoice}s! You win!`);
    }
  }

  function resetGame() {
    setBoard(generateBoard());
    setPlayerChoice(null);
    setGameOver(false);
    setMessage('');
    setLoser(null);
  }

  function choosePlayer(choice) {
    setPlayerChoice(choice);
    setMessage(`You chose ${choice}. Click only your ${choice}s!`);
  }

  return (
    <div className="container">
      <h1><center>Chicken or Banana</center></h1>
      {!playerChoice ? (
        <div style={{ marginBottom: 20 }}>
          <center>Choose your player:</center>
          <center><button onClick={() => choosePlayer('chicken')} style={{ marginRight: 10 }}>
            Chicken
          </button>
          <button onClick={() => choosePlayer('banana')}>
            Banana
          </button></center>
        </div>
      ) : (
        <center><button onClick={resetGame} style={{ marginBottom: 20 }}>
          Restart
        </button></center>
      )}
      {message && <div style={{ marginBottom: 10, fontWeight: 'bold' }}>{message}</div>}

      {gameOver && loser && (
        <div style={{ marginBottom: 20, textAlign: 'center' }}>
          {loser === 'chicken' ? (
            <img src={roastedChickenGif} alt="Roasted Chicken" style={{ maxWidth: '300px' }} />
          ) : (
            <img src={monkeyGif} alt="Monkey" style={{ maxWidth: '300px' }} />
          )}
        </div>
      )}

      <table
        style={{
          margin: '20px auto',
          borderCollapse: 'collapse',
          userSelect: 'none',
        }}
      >
        <tbody>
          {[...Array(ROWS)].map((_, row) => (
            <tr key={row}>
              {[...Array(COLS)].map((_, col) => {
                const idx = row * COLS + col;
                const cell = board[idx];

                const style = {
                  width: 60,
                  height: 60,
                  border: '2px solid #999',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  cursor: gameOver || !playerChoice || cell.isRevealed ? 'default' : 'pointer',
                  backgroundColor: cell.isRevealed ? '#ddd' : '#eee',
                };

                return (
                  <td
                    key={col}
                    style={style}
                    onClick={() => revealCell(idx)}
                    title={cell.isRevealed ? (cell.isChicken ? 'Chicken' : 'Banana') : ''}
                  >
                    {cell.isRevealed ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                          src={cell.isChicken ? chickenImg : bananaImg}
                          alt={cell.isChicken ? 'chicken' : 'banana'}
                          style={{ width: 40, height: 40 }}
                        />
                        <div style={{ fontSize: 12, marginTop: 4 }}>{idx + 1}</div>
                      </div>
                    ) : (
                      <div style={{ fontSize: 14, color: '#666' }}>{idx + 1}</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChickenBanana;
