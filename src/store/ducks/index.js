import { combineReducers } from "redux";

import { reducer as repositories } from "./repositories";
import { reducer as todos } from "./todos";
import { reducer as offlineTable } from './offlineTable';

export default combineReducers({
  repositories,
  todos,
  offlineTable
});