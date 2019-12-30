import React, { useState } from "react";
import { useInterval } from "./Util";
import "./App.css";

function App() {
  const [running, setRunning] = useState(false);
  const [start, setStart] = useState();
  const [delta, setDelta] = useState(0);
  const [timings, setTimings] = useState([]);

  const startTimer = () => {
    setRunning(true);
    setStart(new Date().getTime());
  };

  const stopTimer = () => {
    setRunning(false);
    setTimings([...timings, delta]);
  };

  useInterval(() => {
    if (running) setDelta((new Date().getTime() - start) / 1000);
  }, 50);

  return (
    <div>
      timer
      <div>
        <span>{delta}</span>
      </div>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <ul>
        {timings.reverse().map(timing => (
          <li key={timing}>{timing}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
