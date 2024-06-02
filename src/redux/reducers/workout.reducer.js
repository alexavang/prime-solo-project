const workouts = (state = [], action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return action.payload;
    case "UPDATE_WORKOUT":
      return state.map((workout) =>
        workout.id === action.payload.id
          ? { ...workout, reps_done: action.payload.reps_total, status: true }
          : workout
      );
    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

const generatedWorkouts = (state = [], action) => {
  switch (action.type) {
    case "SET_GENERATED_WORKOUTS":
      return action.payload;
    default:
      return state;
  }
};

export { workouts, categories, generatedWorkouts };
