import { useState } from 'react'
import './App.css'
import UserProfile from './components/userProfile'
import Result from './components/result'
import Square from './components/square'
import Board from './components/board'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [winnerPlayer, setWinnerPlayer] = useState(null)

  return (
    <>
      <div className='flex gap-[25rem] justify-center  items-center mt-[2rem]'>
        <UserProfile
          name="Player 1"
          active={currentPlayer === 1}
          image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" 
        />
        <UserProfile
          name="Player 2"
          active={currentPlayer === 2}
          image ="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png"
        />
      </div>

      <Board
        {...{ currentPlayer, setCurrentPlayer, winnerPlayer, setWinnerPlayer }}
      />

      {winnerPlayer !== null && (
        <Result 
          value={winnerPlayer}
        />
      )}
    </>
  )
}

export default App
