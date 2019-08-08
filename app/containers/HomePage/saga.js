/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, takeLatest, takeEvery
} from 'redux-saga/effects';
import { LOAD_REMINDERS, ADD_REMINDER_REQUEST } from 'containers/App/constants';
import { remindersLoaded, remindersLoadingError, addedReminder } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Reminders request/response handler
 */
export function* getReminders() {
  // Select username from store
  const requestURL = 'http://localhost:8000/reminders';

  try {
    // Call our request helper (see 'utils/request')
    const reminders = yield call(request, requestURL);
    yield put(remindersLoaded(reminders.data));
  } catch (err) {
    yield put(remindersLoadingError(err));
  }
}

export function* addNewReminder(req) {
  // Select username from store
  const requestURL = 'http://localhost:8000/reminders';
  try {
    // Call our request helper (see 'utils/request')
    const newReminder = yield call(request, requestURL, { method: 'POST', body: JSON.stringify(req.reminder) });
    yield put(addedReminder(req.reminder));
  } catch (err) {
    yield put(remindersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* reminderData() {
  // Watches for LOAD_REMINDERS actions and calls getReminders when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REMINDERS, getReminders);
  yield takeEvery(ADD_REMINDER_REQUEST, addNewReminder);
}
