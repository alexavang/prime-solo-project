import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Workouts from "../Workouts/Workouts";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const dispatch = useDispatch();
  const generatedWorkouts = useSelector((state) => state.generatedWorkouts);

  useEffect(() => {
    dispatch({ type: "FETCH_GENERATED_WORKOUTS" });
  }, []);

  const handleAddWorkout = (workout) => {
    const dailyWorkout = {
      ...workout,
      reps: 0,
      reps_total: 10,
      weight: 0,
    };
    dispatch({ type: "ADD_WORKOUT", payload: dailyWorkout });
  };

  return (
    <div className="container">
      <h1>Generated Daily Workouts</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Exercise</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {generatedWorkouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.categories}</td>
              <td>{workout.exercise}</td>
              <td>
                <button onClick={() => handleAddWorkout(workout)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Workouts />
    </div>
  );
}

export default InfoPage;
