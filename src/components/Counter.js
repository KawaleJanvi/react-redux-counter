import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  
  let counter = useSelector(state => state.counter)
  let showCounter = useSelector(state => state.showCounter)

  const dispatch = useDispatch();

  const toggleCounterHandler = () => { dispatch({ type: 'toggle' }) }

  const ResetHandler = () => { dispatch({ type: 'reset' }) };

  function handleIncrement() { dispatch({ type: 'inc' }) }

  function handleDecrement() { dispatch({ type: 'dec' }) }

  function handleIncrease() { dispatch({ type: 'increase', value: 5 }) }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrease}>Increase by 5</button>
      <button onClick={ResetHandler}>Reset</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
