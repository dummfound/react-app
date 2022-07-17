import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Ненужная вещь" },
    { id: 2, value: 4, name: "Ложка" },
    { id: 3, value: 0, name: "Вилка" },
    { id: 4, value: 1, name: "Тарелка" },
    { id: 5, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleDelete = (id) => {
    setCounters((prevState) =>
      prevState.filter((counter) => counter.id !== id)
    );
  };

  const handleIncrement = (id) => {
    const newCounter = counters.map((count) => {
      if (count.id === id) {
        count.value += 1;
      }
      return count;
    });
    setCounters(newCounter);
  };

  const handleDecrement = (id) => {
    const newCounter = counters.map((count) => {
      if (count.id === id) {
        if (count.value > 0) {
          count.value -= 1;
        }
      }
      return count;
    });
    setCounters(newCounter);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-danger btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
