const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "UNSET_USER":
      return {};
    case "UPDATE_PROFILE_IMAGE":
      return {
        ...state,
        profileImage: action.payload,
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
