import React, { useState } from "react";

const Counter = ({ props }) => {
  // let [value, setValue] = useState(props.value);
  const { value } = props;

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const formatCount = () => {
    return value === 0 ? "Empty" : value;
  };

  return (
    <React.Fragment>
      <div>
        <span>{props.name}</span>
        <span className={getBageClasses()}>{formatCount()}</span>

        <button
          type="button"
          className="btn btn-primary btn-sm m-2"
          onClick={() => props.onIncrement(props.id)}
        >
          Add!
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm m-2"
          onClick={() => props.onDecrement(props.id)}
        >
          Delete!
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm m-2"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default Counter;
