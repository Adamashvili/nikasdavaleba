
import { useState } from 'react';
import './App.css'

function App() {
  const [ricxvi, setRicxvi] = useState(1)


  // function klikisLogika() {
  //  setRicxvi(ricxvi + 1)
  
  // }


  // function minusLogika() {
  //   setRicxvi(ricxvi - 1)
  // }
 

  return (
    <>
    <div className={ricxvi > 5 ? 'meore' : 'pirveli'} id='card'>
      <p style={ricxvi > 10 ? {color: 'red'} : {color: 'green'}}> {ricxvi > 10 ? 'Too Many' : 'Norm'}</p>
    <h1 style={ricxvi > 5 ? {color: 'red', fontFamily:'monospace' } : {color: 'green', fontFamily: 'cursive'}}>{ricxvi}</h1>
      {/* <button onClick={klikisLogika}>+</button>
      <button onClick={minusLogika}>-</button> */}

      <button onClick={ () => setRicxvi(ricxvi + 1) }>+</button>
      <button onClick={ () => setRicxvi(ricxvi - 1) }>-</button>
    </div>
   
    </>
  )
}

export default App




