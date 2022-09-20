import * as React from 'react';
import './style.css';
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Счёт: {count}
      <button onClick={() => setCount(initialCount)}>Сбросить</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
