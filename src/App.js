import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Dolar, setDolar] = useState(0);
  const [Euro, setEuro] = useState(0);
  const [Bitcoin, setBitcoin] = useState(0);


  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar((total * tipo) / 1);
    setEuro((total * tipo) / 1.17);
    setBitcoin((total * tipo) /45807.60);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisas</h1>

      <p>Dolar: {Dolar}</p>
      <p>Euro: {Euro}</p>
      <p>Bitcoin: {Bitcoin}</p>


      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={1.17}>Euro</option>
        <option value={45807.60}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
