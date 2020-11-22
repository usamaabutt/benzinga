import {fork} from "redux-saga/effects";
import {ideas} from './ideas/ideas-saga';

export function* rootSaga() {
   yield fork(ideas);
}
