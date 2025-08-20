import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setCounterVisible(c => !c);
    }, 5000);

    return () => clearInterval(toggle); // cleanup
  }, []);

  return (
    <div>
      {counterVisible && <Counter />}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(c => c + 1);
  }

  function decreaseCount() {
    setCount(c => c - 1);
  }

  function reset() {
    setCount(0);
  }

  useEffect(() => {
    const clock = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(clock); // cleanup
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
