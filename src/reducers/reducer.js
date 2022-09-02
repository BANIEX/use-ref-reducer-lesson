const reducer = (state, action) => {
  if (action.type === "NO-INPUT") {
    return {
      ...state,
      modal: true,
      modalContent: "Please enter some value",
    };
  }
  if (action.type === "ADD-USER") {
    return {
      ...state,
      people: [...state.people, action.payload],
      modal: true,
      modalContent: "User has been added",
    };
  }
  if (action.type === "CLOSE-MODAL") {
    return {
      ...state,
      modal: false,
    };
  }
  throw new Error("No action type found");
};

export default reducer;
