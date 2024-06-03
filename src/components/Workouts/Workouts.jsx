import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Workouts.css";

function Workouts() {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);
  const categories = ["Upper Body", "Lower Body", "Back and Core"];

  const [Exercise, setExercise] = useState({
    categories: "",
    exercise: "",
    reps: "",
    reps_total: "",
    weight: "",
  });

  useEffect(() => {
    dispatch({ type: "FETCH_WORKOUTS" });
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExercise({ ...Exercise, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Exercise.id) {
      console.log("Updating workout:", Exercise);
      dispatch({ type: "UPDATE_WORKOUT", payload: Exercise });
    } else {
      dispatch({ type: "ADD_WORKOUT", payload: Exercise });
    }
    setExercise({
      categories: "",
      exercise: "",
      reps: "",
      reps_total: "",
      weight: "",
    });
  };

  const handleEditWorkout = (workout) => {
    setExercise(workout);
  };

  const handleDeleteWorkout = (id) => {
    dispatch({ type: "DELETE_WORKOUT", payload: id });
  };

  const handleCompleteWorkout = (workout) => {
    const completedWorkout = {
      ...workout,
      reps: workout.reps_total,
      status: true,
    };
    dispatch({ type: "COMPLETE_WORKOUT", payload: completedWorkout });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Users Workouts</h1>
      <select
        name="categories"
        value={Exercise.categories}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        name="exercise"
        type="text"
        placeholder="Exercise"
        value={Exercise.exercise}
        onChange={handleInputChange}
        required
      />
      <input
        name="reps"
        type="number"
        placeholder="Reps"
        value={Exercise.reps}
        onChange={handleInputChange}
        required
      />
      <input
        name="reps_total"
        type="number"
        placeholder="Reps Total"
        value={Exercise.reps_total}
        onChange={handleInputChange}
        required
      />
      <input
        name="weight"
        type="number"
        placeholder="Weight"
        value={Exercise.weight}
        onChange={handleInputChange}
        required
      />
      <button type="submit">{Exercise.id ? "Update" : "Add"}</button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Exercise</th>
              <th>Reps</th>
              <th>Reps Total</th>
              <th>Weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr
                key={workout.id}
                style={{
                  textDecorationLine: workout.status ? "line-through" : "none",
                  textDecorationColor: workout.status ? "#6F0AF0" : "none",
                }}
              >
                <td>{workout.categories}</td>
                <td>{workout.exercise}</td>
                <td>{workout.reps}</td>
                <td>{workout.reps_total}</td>
                <td>{workout.weight}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleEditWorkout(workout)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteWorkout(workout.id)}
                  >
                    Delete
                  </button>
                  {!workout.status && (
                    <button onClick={() => handleCompleteWorkout(workout)}>
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default Workouts;
