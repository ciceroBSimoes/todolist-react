export const initialState = { isUpdated: false };

export const reducerList = (state, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      console.log("mudou");
      return { isUpdated: !state.isUpdated };
    default:
      throw new Error();
  }
};
