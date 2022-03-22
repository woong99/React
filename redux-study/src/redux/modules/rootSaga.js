import { all } from 'redux-saga/effects';
import { usersSage } from './users';

export default function* rootSaga() {
  yield all([usersSage()]);
}
