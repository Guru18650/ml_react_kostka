import './App.css';
import { useState } from 'react';




function App() {

  const [length, setLength] = useState(25);
  const handleLength = (event) => setLength(event.target.value)
  const [mlitery, setMlitery] = useState(false);
  const handleMlitery = (event) => setMlitery(event.target.checked)
  const [dlitery, setDlitery] = useState(false);
  const handleDlitery = (event) => setDlitery(event.target.checked)
  const [liczby, setLiczby] = useState(false);
  const handleLiczby = (event) => setLiczby(event.target.checked)
  const [znaki, setZnaki] = useState(false);
  const handleZnaki = (event) => setZnaki(event.target.checked)

  const mLiteryB = "qwertyuioplkjhgfdsazxcvbnm";
  const dLiteryB = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  const liczbyB = "1234567890";
  const znakiB = "!@#$%^&*()";

  const [hasla, setHasla] = useState([]);
  let baza = "";

  const handleForm = () => {
    let hasloTemp = "";
    if(mlitery)
      baza+=mLiteryB;
    if(dlitery)
      baza+=dLiteryB;
    if(liczby)
      baza+=liczbyB;
    if(znaki)
      baza+=znakiB;

    for (let i = 0; i < length; i++) {
      hasloTemp+=baza[Math.floor(Math.random() * baza.length)];
    }
    setHasla([...hasla, hasloTemp]);
  };

  
  return (
    <div className="App">
    <img className='bg' src="/bg.jpg" alt='bg'/>
      <div className='content'>
      <h1>Generator haseł</h1>
      <div className='center'>    
      <label>Długość</label><br></br>
    <input type="range" min="4" max="25"  onChange={handleLength}/>{length}<br></br>
      <label className='form-control'>
    <input type="checkbox" onChange={handleMlitery}/>
    Małe Litery</label>
    <label className='form-control'> 
    <input type="checkbox" onChange={handleDlitery} />
      Duże Litery</label>
    <label className='form-control'>
    <input type="checkbox" onChange={handleLiczby}/>
      Liczby</label>
    <label className='form-control'>
    <input type="checkbox" onChange={handleZnaki}/>
      Znaki specjalne</label>
      </div>
      <button onClick={handleForm} disabled={!(znaki||mlitery||dlitery||liczby)}>Wygeneruj</button>
      <ul>
        {hasla.map(haslo => (
          <li onClick={()=>{setHasla(hasla.filter(a=>a!==haslo))}}>{haslo}</li>
        ))}
      </ul>
  </div></div>
  
  );
}

export default App;
