const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// TODO: add more exercise
const EXERCISE = [{
    categories: 'Lifting',
    exercise: 'DUMB BELL',
}, {
    categories: 'Lifting 2',
    exercise: 'DUMB BELL 2',
}];

const NUMBER_OF_DAILY_EXERCISE = 3;
let dailyExercise = [];
let dailyExerciseDate; // "MM/DD/YYYY"

router.get("/", (req, res) => {
    const CURRENT_DATE = (new Date()).toLocaleDateString();
    if (!dailyExerciseDate && dailyExerciseDate !== CURRENT_DATE) {
        // generate new workout
        dailyExerciseDate = CURRENT_DATE;

        dailyExercise = EXERCISE.sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_DAILY_EXERCISE);
    }

    res.json(dailyExercise)
});
  
module.exports = router;
