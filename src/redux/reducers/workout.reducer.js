const workouts = (state = [], action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return action.payload;
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

export { workouts, categories };
