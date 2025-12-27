import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key === "Enter" && inputText.trim() !== "") {
      //logic to add chips
      setChips(prev => [...prev, inputText]);
      setInputText("");
    }
  }

  const handleDeleteChip = (index) => {
    //remove value on index from chips array
    const copyChips = [...chips];
    copyChips.splice(index, 1)
    setChips(copyChips)
  } 

  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input 
        type='text'
        placeholder='Type a chip and press tag'
        className='input'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div style={{display: "flex"}}>
        {chips.map((chip, index) => <div style={{background: "gray", margin: "10px", padding: "5px", color: "white"}}>
          {chip}
          <button style={{color: "red"}}
            onClick={() => handleDeleteChip(index)}
          >X</button>
        </div>)}
      </div>
    </div>
  )
}

export default App
