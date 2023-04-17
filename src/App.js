import { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };

  return { value, increase, decrease, reset };
};

const App = () => {
  const counter = useCounter();

  return (
    <div>
      <div>{counter.value}</div>
      <button onClick={counter.decrease}>-</button>
      <button onClick={counter.reset}>reset</button>
      <button onClick={counter.increase}>+</button>
    </div>
  );
};

export default App;
