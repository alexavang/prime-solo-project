import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Workouts() {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);
  const categories = ["Upper Body", "Lower Body", "Back and Core"];

  const [Exercise, setExercise] = useState({
    id: null,
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
      id: null,
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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Users Workouts</h2>
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

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Reps Total</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default Workouts;
