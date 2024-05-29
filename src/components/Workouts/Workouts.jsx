import React from "react";

function Workouts() {
  return (
    <form>
      <h2>Users Workouts</h2>
      <input type="text" placeholder="Exercise" />
      <input type="text" placeholder="Reps" />
      <input type="text" placeholder="Reps Total" />
      <input type="text" placeholder="Weight" />
      <button onClick={""}>Add</button>

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
          <tr>
            <td>Push-Ups</td>
            <td>25</td>
            <td>50</td>
            <td></td>
            <button>Delete</button>
            <button>Edit</button>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Workouts;
