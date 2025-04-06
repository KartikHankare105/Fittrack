import React, { useState } from "react";
import { motion } from "framer-motion";
import "./calorie.css";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      alert("Please fill in all fields");
      return;
    }

    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseInt(age);

    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const totalCalories = Math.round(bmr * parseFloat(activityLevel));
    setCalories(totalCalories);
  };

  return (
    <motion.div
      className="calorie-container"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Calorie Calculator</h1>

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <select
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
      >
        <option value="1.2">Sedentary (little/no exercise)</option>
        <option value="1.375">Lightly active (1–3 days/week)</option>
        <option value="1.55">Moderately active (3–5 days/week)</option>
        <option value="1.725">Very active (6–7 days/week)</option>
        <option value="1.9">Super active (twice/day or physical job)</option>
      </select>

      <button onClick={calculateCalories}>Calculate</button>

      {calories && (
        <motion.div
          className="result"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 130 }}
        >
          <p>Your daily calorie need is:</p>
          <strong>{calories} kcal</strong>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CalorieCalculator;
