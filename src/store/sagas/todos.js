import { put, delay } from "redux-saga/effects";

import TodosActions from "../ducks/todos";

export function* addTodo({ text }) {

  yield delay(10000);
  
  yield put(TodosActions.addTodoSuccess(text));
}
