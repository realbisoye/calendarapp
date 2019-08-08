import {
  LOAD_REMINDERS,
  LOAD_REMINDERS_SUCCESS,
  LOAD_REMINDERS_ERROR,
} from '../constants';

import {
  loadReminders,
  remindersLoaded,
  remindersLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadReminders', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REMINDERS,
      };

      expect(loadReminders()).toEqual(expectedResult);
    });
  });

  describe('remindersLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REMINDERS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(remindersLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('remindersLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REMINDERS_ERROR,
        error: fixture,
      };

      expect(remindersLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
