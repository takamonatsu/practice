import React, {useState} from 'react';

const CounterApp: React.FC  = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <div className='counterApp'>
      <p>Counter: {count}</p>
      <button onClick={increment} name='increment'>+</button>
      <button onClick={decrement} name='decrement'>-</button>
    </div>
  )
}

export default CounterApp
