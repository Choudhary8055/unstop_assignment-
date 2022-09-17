import React from "react";
import "../App.css";

function Train({ train, trains, onChange }) {
  return (
    <div className="Trains">
      <label htmlFor="train">Pick a train Name</label>
      <select
        id="train"
        value={train.name}
        onChange={(e) => {
          onChange(train.find((train) => train.name === e.target.value));
        }}
      >
        {trains.map((train) => (
          <option key={train.name} value={train.name}>
            {train.name} (₹{train.price})
          </option>
        ))}
      </select>
    </div>
  );
}
export default Train;
