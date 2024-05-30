import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchWorkouts() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get("/api/workout", config);
    yield put({ type: "SET_WORKOUTS", payload: response.data });
  } catch (error) {
    console.log("Workouts get request failed", error);
  }
}

function* fetchCategories() {
  try {
    const response = yield axios.get("/api/workout/categories");
    yield put({ type: "SET_CATEGORIES", payload: response.data });
  } catch (error) {
    console.log("Categories get request failed", error);
  }
}

function* addWorkout(action) {
  try {
    yield axios.post("/api/workout", action.payload);
    yield put({ type: "FETCH_WORKOUTS" });
  } catch (error) {
    console.log("Workout post request failed", error);
  }
}

function* updateWorkout(action) {
  try {
    console.log("Updating workout with payload:", action.payload);
    yield axios.put(`/api/workout/${action.payload.id}`, action.payload);
    yield put({ type: "FETCH_WORKOUTS" });
  } catch (error) {
    console.log("Workout put request failed", error);
  }
}

function* deleteWorkout(action) {
  try {
    yield axios.delete(`/api/workout/${action.payload}`);
    yield put({ type: "FETCH_WORKOUTS" });
  } catch (error) {
    console.log("Workout delete request failed", error);
  }
}

function* workoutSaga() {
  yield takeLatest("FETCH_WORKOUTS", fetchWorkouts);
  yield takeLatest("FETCH_CATEGORIES", fetchCategories);
  yield takeLatest("ADD_WORKOUT", addWorkout);
  yield takeLatest("UPDATE_WORKOUT", updateWorkout);
  yield takeLatest("DELETE_WORKOUT", deleteWorkout);
}

export default workoutSaga;
