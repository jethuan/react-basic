const initState = {
  users: [
    { id: 1, name: "Jet" },
    { id: 2, name: "Huan" },
    { id: 3, name: "Abus" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER": {
      let userCopy = state.users;
      userCopy = userCopy.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users: userCopy,
      };
    }
    case "ADD_USER": {
      let id = Math.floor(Math.random() * 100);
      let userCopy = {
        id: id,
        name: `Random ${id}`,
      };
      return {
        ...state,
        users: [...state.users, userCopy],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
