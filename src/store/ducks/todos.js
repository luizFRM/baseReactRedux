import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";


const { Types, Creators } = createActions({
  addTodoRequest: ["text"],
  addTodoSuccess: ["text"]
});

export const TodosTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_TODO_SUCCESS]: (state, { text }) =>
    state.update("data", data => [...data, text])
});