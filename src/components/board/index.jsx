import { useState } from "react"
import Square from "../square"

function Board(props) {
    const [initialArray, setInitialArray] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]);

    function handleClick(x, y) {
        if (props.winnerPlayer === null && initialArray[x][y] === null) {
            const currentPlayerSymbol = props.currentPlayer === 1 ? 'X' : 'O';
        
            const newArray = [...initialArray];
            newArray[x][y] = currentPlayerSymbol;
            setInitialArray(newArray);

            checkWinner();

            props.setCurrentPlayer((props.currentPlayer % 2) + 1);
        }
    }

    function checkWinner() {
        for (let i = 0; i < 3; i++) {
            if (initialArray[i][0] !== null && initialArray[i][0] === initialArray[i][1] && initialArray[i][0] === initialArray[i][2]) {
              props.setWinnerPlayer(initialArray[i][0] === "X" ? 1 : 2);
              return;
            }
          }
        
        for (let i = 0; i < 3; i++) {
            if (initialArray[0][i] !== null && initialArray[0][i] === initialArray[1][i] && initialArray[0][i] === initialArray[2][i]) {
              props.setWinnerPlayer(initialArray[0][i] === "X" ? 1 : 2);
              return;
            }
        }

        if (initialArray[0][0] !== null && initialArray[0][0] === initialArray[1][1] && initialArray[0][0] === initialArray[2][2]) {
            props.setWinnerPlayer(initialArray[0][0] === "X" ? 1 : 2);
            return;
        }
      
        if (initialArray[0][2] !== null && initialArray[0][2] === initialArray[1][1] && initialArray[0][2] === initialArray[2][0]) {
            props.setWinnerPlayer(initialArray[0][2] === "X" ? 1 : 2);
            return;
        }

        if (initialArray.every(row => row.every(cell => cell !== null))) {
            props.setWinnerPlayer(0);
        }
    }

    return (
        <>
            <div className="flex justify-center  items-center flex-col my-[3rem]">
                <div>
                    <Square value={initialArray[0][0]} onSquareClick={() => handleClick(0, 0)} />
                    <Square value={initialArray[0][1]} onSquareClick={() => handleClick(0, 1)} />
                    <Square value={initialArray[0][2]} onSquareClick={() => handleClick(0, 2)} />
                </div>
                <div>
                    <Square value={initialArray[1][0]} onSquareClick={() => handleClick(1, 0)} />
                    <Square value={initialArray[1][1]} onSquareClick={() => handleClick(1, 1)} />
                    <Square value={initialArray[1][2]} onSquareClick={() => handleClick(1, 2)} />
                </div>
                <div>
                    <Square value={initialArray[2][0]} onSquareClick={() => handleClick(2, 0)} />
                    <Square value={initialArray[2][1]} onSquareClick={() => handleClick(2, 1)} />
                    <Square value={initialArray[2][2]} onSquareClick={() => handleClick(2, 2)} />
                </div>
            </div>
        </>
    )
}

export default Board