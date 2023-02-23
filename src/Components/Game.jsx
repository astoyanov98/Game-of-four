import React, {useState, useEffect} from "react";
import './styles.css'

const Game = ({title}) => {
    const [board, setBoard] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState('1')
    const [winner, setWinner] = useState('')
    const [newGame, setNewGame] = useState(false)

    useEffect(() => {
        let initial = Array(6).fill(0).map(row => new Array(7).fill('null'))
        setBoard(initial)
    }, [newGame])

    const handleWinner = () => {
        setWinner('')
        setNewGame(true);
    }

    const handleClick = (col) => {
        const newBoard = board;
        let isAlreadyPlayed = false;

        newBoard.map((row, index) => {
            if(row[col] !== "null" && !isAlreadyPlayed) {
                board[index - 1][col] = currentPlayer;
                isAlreadyPlayed = true;
            }else if(index === 5 && !isAlreadyPlayed) {
                board[index][col] = currentPlayer
                isAlreadyPlayed = true;
            }
        })
        
        setBoard(newBoard);
        isWinner(newBoard)
        currentPlayer === '1' ? setCurrentPlayer('2') : setCurrentPlayer("1")
    }

    const isWinner = (board) => {

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length - 3; col++) {
                if(board[row][col] === '1' && board[row][col + 1] === '1' && board[row][col + 2] === '1' && board[row][col + 3] === '1') {
                    setWinner('1')
                } else if(board[row][col] === '2' && board[row][col + 1] === '2' && board[row][col + 2] === '2' && board[row][col + 3] === '2') {
                    setWinner('2')
                }
            }
        }
    }

    return(
        <>
        {winner !== '' && 
            <div className="winScreen">
                <div>Player {winner}</div>
                <div style={{fontSize:'36px'}}>WINS</div>
                <button onClick={() => {handleWinner()}}>Play again</button>
            </div>
        }
            <div className="container">
                <h1 data-testid="header">{title}</h1>
                {board.map((rows, indexRow) => {
                    return (
                        <div>
                            {rows.map((cols, indexCol) => {
                                return <button disabled={winner !== ''} style={{backgroundColor: board[indexRow][indexCol] === '1' ? '#FFCE67' : board[indexRow][indexCol] === '2' ? '#FD6687' : '#7945FF'}} className="button" onClick={() => handleClick(indexCol)}></button>;
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Game;