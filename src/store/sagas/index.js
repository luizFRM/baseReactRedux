import { all, takeEvery } from "redux-saga/effects";

import { RepositoriesTypes } from "../ducks/repositories";
import { addRepository } from "./repositories";

import { TodosTypes } from '../ducks/todos';
import { addTodo } from './todos';

import { OfflineTableTypes } from '../ducks/offlineTable';
import { addOfflineTable } from './offlineTable';

export default function* rootSaga() {
  yield all([
    takeEvery(RepositoriesTypes.ADD_REPOSITORY_REQUEST, addRepository),
    takeEvery(TodosTypes.ADD_TODO_REQUEST, addTodo),
    takeEvery(OfflineTableTypes.ADD_OFFLINE_TABLE_REQUEST, addOfflineTable)

  ]);
}