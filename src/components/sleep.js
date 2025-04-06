import React from "react";
import "./sleep.css";
import TypewriterText from "./TypewriterText"; // Make sure path is correct

const Sleep = () => {
  const sleepCycles = [
    { time: "9:45 PM", wake: "5:45 AM" },
    { time: "10:15 PM", wake: "6:15 AM" },
    { time: "10:45 PM", wake: "6:45 AM" },
    { time: "11:15 PM", wake: "7:15 AM" },
    { time: "11:45 PM", wake: "7:45 AM" },
  ];

  return (
    <div className="sleep-container">
      <h1>Sleep Cycle Guide</h1>

      <TypewriterText
        className="intro"
        text="Sleep isn’t just rest — it's when your body recovers, builds muscle, balances hormones, and refreshes your brain. Missing quality sleep can lead to poor performance, mood swings, and slower recovery."
      />

      <h2>🧠 Why Sleep Cycles Matter</h2>
      <TypewriterText
        text="Your body goes through 90-minute sleep cycles. Waking up in the middle of a deep sleep makes you feel groggy. It's best to wake up at the end of a cycle."
      />

      <h2>⏰ Recommended Sleep Times</h2>
      <p>If you want to wake up around 6–8 AM, try sleeping at:</p>
      <ul className="cycle-list">
        {sleepCycles.map((cycle, index) => (
          <li key={index}>
            <strong>Sleep at:</strong> {cycle.time} → <strong>Wake up:</strong> {cycle.wake}
          </li>
        ))}
      </ul>

      <h2>💡 Tips for Better Sleep</h2>
      <ul className="tips">
        <li>📵 Avoid screens 30–60 min before sleep.</li>
        <li>🌙 Maintain a fixed sleep schedule.</li>
        <li>🧘‍♂️ Relax with breathing or meditation before bed.</li>
        <li>🍽️ Avoid caffeine or heavy meals late at night.</li>
        <li>🛏️ Keep your sleep environment cool, dark, and quiet.</li>
      </ul>
    </div>
  );
};

export default Sleep;
