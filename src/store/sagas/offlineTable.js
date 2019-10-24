import { put } from "redux-saga/effects";

import OfflineTableActions from "../ducks/offlineTable";

export function* addOfflineTable({ text }) {
  
  yield put(OfflineTableActions.addOfflineTableSuccess(text));
}
