/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REMINDERS = 'calendar/App/LOAD_REMINDERS';
export const LOAD_REMINDERS_SUCCESS = 'calendar/App/LOAD_REMINDERS_SUCCESS';
export const LOAD_REMINDERS_ERROR = 'calendar/App/LOAD_REMINDERS_ERROR';
export const ADD_REMINDER = 'calendar/App/ADD_REMINDER';
export const ADD_REMINDER_REQUEST = 'calendar/App/ADD_REMINDER_REQUEST';
export const DEFAULT_LOCALE = 'en';
