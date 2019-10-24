import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  addOfflineTableRequest: ["text"],
  addOfflineTableSuccess: ["text"]
});

export const OfflineTableTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_OFFLINE_TABLE_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_OFFLINE_TABLE_SUCCESS]: (state, { text }) =>
    state.update("data", data => [...data, text])
});