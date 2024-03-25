import React, { useEffect, useState } from "react";
import "./container.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState("");

  const handleGoalChange = (e) => {
    setGoal(parseInt(e.target.value));
  };

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === goal && "vibrate" in navigator) {
      navigator.vibrate(1000);
      setGoal("");
    }
  };

  const resetCount = () => {
    setCount(0);
    setGoal("");
  };

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(parseInt(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div className="container">
        <input
          className="goal_input"
          type="number"
          value={goal}
          onChange={handleGoalChange}
          placeholder="Set a Goal"
        />
        <div className="display" onClick={handleCount}>
          <h3>
            {count
              .toString()
              .split("")
              .map((digit, index) => (
                <span key={index} className={`digit digit-${index + 1}`}>
                  {digit}
                </span>
              ))}
          </h3>
        </div>
        <button className="resetbox" disabled={!count} onClick={resetCount}>
          Reset
        </button>
      </div>
      <div class="lg-display">
        <h3>This app only works in screens with 800 pixels or below</h3>
      </div>
    </>
  );
}
