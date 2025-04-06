import React, { useState } from "react";
import { motion } from "framer-motion";
import "./water.css";

const WaterCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1.0");
  const [water, setWater] = useState(null);

  const calculateWater = () => {
    if (!weight) {
      alert("Please enter your weight");
      return;
    }

    const w = parseFloat(weight);
    const multiplier = parseFloat(activity);
    const waterLiters = (w * 0.033 * multiplier).toFixed(2);
    setWater(waterLiters);
  };

  return (
    <motion.div
      className="calorie-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Water Intake Calculator</h1>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="1.0">Sedentary (little/no activity)</option>
        <option value="1.1">Light activity (1–2 days/week)</option>
        <option value="1.2">Moderate activity (3–5 days/week)</option>
        <option value="1.3">High activity (6–7 days/week)</option>
        <option value="1.4">Very High activity (twice/day or athlete)</option>
      </select>

      <button onClick={calculateWater}>Calculate</button>

      {water && (
        <motion.div
          className="result"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <p>Your daily recommended water intake is:</p>
          <strong>{water} liters</strong>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WaterCalculator;
