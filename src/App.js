import React, {useState} from 'react'
import './App.css'



function App() {
  const [text, setText] = useState('')
  const [angka] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  let result = angka.sort((a,b) => b-a)

  result = [...angka, '-', '+', '*', '/']

  const handleClick = (opsi) => {
    if(opsi === 'hasil') {
      let x = text
      x = eval(x)
      setText(x)

    } else if(opsi == 'backspace') {
      let number = text
      let len = number.length-1
      let newnumber = number.substring(0, len)
      setText(newnumber)

    } else {
      setText('')
    }
  }

  const pilihAngka = (e) => {
    let number = e.target.innerText
    setText(text + number)
  }

  return (
    <div className="container">
      <h2>Mini Kalkulator.</h2>
      <input type="text" placeholder="Angka" defaultValue={text} onChange={(e) => setText(e.target.value)} />
      
      <main>
        {
          result.map((a, index) => {
            return (
              <div key={index} className="col" onClick={(e) => pilihAngka(e)}>{a}</div>
            )
          })
        }
      </main>

      <button onClick={() => handleClick('hasil')}>Hasil</button>
      <button onClick={() => handleClick('backspace')}>Backspace</button>
      <button onClick={() => handleClick('clear')}>Clear</button>
    </div>
  );
}

export default App;
