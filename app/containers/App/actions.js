/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REMINDERS,
  LOAD_REMINDERS_SUCCESS,
  LOAD_REMINDERS_ERROR,
  ADD_REMINDER,
  ADD_REMINDER_REQUEST,
} from './constants';

/**
 * Load the reminders, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REMINDERS
 */
export function loadReminders() {
  return {
    type: LOAD_REMINDERS,
  };
}

/**
 * Dispatched when the reminders are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REMINDERS_SUCCESS passing the repos
 */
export function remindersLoaded(reminders) {
  return {
    type: LOAD_REMINDERS_SUCCESS,
    reminders,
  };
}

/**
 * Dispatched when loading the reminders fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REMINDERS_ERROR passing the error
 */
export function remindersLoadingError(error) {
  return {
    type: LOAD_REMINDERS_ERROR,
    error,
  };
}

/**
 * Dispatched when new reminder is added
 *
 * @param  {object} reminder The new reminder object
 *
 * @return {object}       An action object with a type of ADD_REMINDER and new reminder data
 */

export function addedReminder(reminder) {
  return {
    type: ADD_REMINDER,
    reminder,
  };
}

export function addReminder(reminder) {
  return {
    type: ADD_REMINDER_REQUEST,
    reminder
  };
}
