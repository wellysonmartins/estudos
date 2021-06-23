import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('Contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>
        Contador: {counter} | Contador 2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;
