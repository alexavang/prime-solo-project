import React from "react";
import Workouts from "../Workouts/Workouts";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
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
          <tr>
            <td>Push-Ups</td>
            <td>25</td>
            <td>50</td>
            <td></td>
            <button>Add</button>
          </tr>
        </tbody>
      </table>
      <br />
      <Workouts />
    </div>
  );
}

export default InfoPage;
