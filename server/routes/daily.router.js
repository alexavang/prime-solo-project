const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// TODO: add more exercise
const EXERCISE = [
  {
    categories: "Upper Body Exercises",
    exercise: "Push-Ups",
  },
  {
    categories: "Upper Body Exercises",
    exercise: "Diamond Push-Ups",
  },
  {
    categories: "Upper Body Exercises",
    exercise: "Pike Push-Ups",
  },
  {
    categories: "Upper Body Exercises",
    exercise: "Arm Circles",
  },
  {
    categories: "Upper Body Exercises",
    exercise: "Plank to Push-Up",
  },
  {
    categories: "Upper Body Exercises",
    exercise: "Inchworms",
  },
  {
    categories: "Upper Body Exercises",
    exercise: "Wide Grip Push-Ups",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Squats",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Lunges",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Glute Bridges",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Single-Leg Glute Bridges",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Calf Raises",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Jump Squats",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Curtsy Lunges",
  },
  {
    categories: "Lower Body Exercise",
    exercise: "Wall Sits",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Planks",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Side Planks",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Mountain Climbers",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Bicycle Crunches",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Russian Twists",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Leg Raises",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Reverse Crunches",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Bird-Dog",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Superman",
  },
  {
    categories: "Back and Core Exercises",
    exercise: "Hollow Body Hold",
  },
];

const NUMBER_OF_DAILY_EXERCISE = 3;
let dailyExercise = [];
let dailyExerciseDate; // "MM/DD/YYYY"

router.get("/", (req, res) => {
  const CURRENT_DATE = new Date().toLocaleDateString();
  if (!dailyExerciseDate && dailyExerciseDate !== CURRENT_DATE) {
    // generate new workout
    dailyExerciseDate = CURRENT_DATE;

    dailyExercise = EXERCISE.sort(() => 0.5 - Math.random()).slice(
      0,
      NUMBER_OF_DAILY_EXERCISE
    );
  }

  res.json(dailyExercise);
});

module.exports = router;
