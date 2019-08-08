/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_REMINDERS } from 'containers/App/constants';
import { remindersLoaded, remindersLoadingError } from 'containers/App/actions';

import reminderData, { getRepos } from '../saga';

const username = 'flexdinesh';

/* eslint-disable redux-saga/yield-effects */
describe('getRepos Saga', () => {
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getRepos();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the remindersLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }, {
      name: 'Second repo',
    }];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(remindersLoaded(response, username)));
  });

  it('should call the remindersLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(remindersLoadingError(response)));
  });
});

describe('reminderDataSaga Saga', () => {
  const reminderDataSaga = reminderData();

  it('should start task to watch for LOAD_REMINDERS action', () => {
    const takeLatestDescriptor = reminderDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REMINDERS, getRepos));
  });
});
