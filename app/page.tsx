"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Cell from './components/cell';

const winnigConsts = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
]
function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", "",])
  const [go, setGo] = useState('circle')
  const [winningMessage, setWinningMessage] = useState("")
  
  useEffect(() => {
    winnigConsts.forEach((combo) =>{
      const circleWins = combo.every((cell)=>cells[cell]==="circle")
      const crossWins = combo.every((cell)=>cells[cell]==="cross")

      if(circleWins){
        setWinningMessage("circle Wins!")
      }else if(crossWins){
        setWinningMessage("cross Wins!")
      }
    })
  }, [cells, winningMessage])

  useEffect(()=>{
    if(cells.every((cell)=>cell!=="")&& !winningMessage){
      setWinningMessage("Draw!");
    }
  })
  
  return (
    <main className='container'>
      <div className='gameboard'>
        {cells.map((cell, index) => (
          <Cell 
          id={index}
          go={go} 
          setGo={setGo} 
          key={index} 
          cells={cells} 
          setCells={setCells} 
          cell={cell} 
          winningMessage = {winningMessage}
          />))}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage && <div>it's now {go} turn</div>}

    </main>
  );
}
export default Home;