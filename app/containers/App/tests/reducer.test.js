import appReducer from '../reducer';
import { loadReminders, remindersLoaded, remindersLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentUser: false,
      userData: {
        repositories: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadReminders action correctly', () => {
    const expectedResult = {
      ...state,
      loading: true,
      error: false,
      userData: { repositories: false },
    };
    expect(appReducer(state, loadReminders())).toEqual(expectedResult);
  });

  it('should handle the remindersLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = {
      ...state,
      loading: false,
      currentUser: username,
      userData: { repositories: fixture },
    };

    expect(appReducer(state, remindersLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the remindersLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      ...state,
      error: fixture,
      loading: false,
    };

    expect(appReducer(state, remindersLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
