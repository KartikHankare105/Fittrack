import React, { useState } from 'react';
import './bmi.css';
import { motion } from 'framer-motion';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Please fill in all fields");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const bmiValue = (w * 10000) / (h * h);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <motion.div
      className="calorie-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1>BMI Calculator</h1>

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

      <button onClick={calculateBMI}>Calculate</button>
      <button onClick={resetForm} style={{ marginTop: '10px' }}>
        Reset
      </button>

      {bmi && (
        <div className="result">
          <p>Your BMI is:</p>
          <strong>{bmi}</strong>
          <p>{message}</p>
        </div>
      )}
    </motion.div>
  );
};

export default BMICalculator;
