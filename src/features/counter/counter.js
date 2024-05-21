import { useState } from "react";
import {
  increment,
  selectCount,
  decrement,
  incrementByAmount,
} from "./counter-slice";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <button onClick={() => dispatch(increment())}> + </button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}> - </button>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={({ target }) => setIncrementAmount(target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
        Add Amount
      </button>
    </div>
  );
};
