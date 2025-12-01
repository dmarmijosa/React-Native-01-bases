import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const incrementBy = (value: number): void => {
    if (count + value < 0) return;
    setCount(count + value);
  };
  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <button
          className="hover:cursor-pointer bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => incrementBy(1)}
        >
          +1
        </button>
        <button
          className="hover:cursor-pointer bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => incrementBy(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
