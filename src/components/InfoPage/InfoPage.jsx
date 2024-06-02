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
  }, [dispatch]);

  const handleAddWorkout = (workout) => {
    dispatch({ type: "ADD_WORKOUT", payload: workout });
  };

  return (
    <div className="container">
      <h1>Generated Daily Workouts</h1>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Reps Total</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {generatedWorkouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.exercise}</td>
              <td>{workout.reps}</td>
              <td>{workout.reps_total}</td>
              <td>{workout.weight}</td>
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
