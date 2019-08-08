import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectReminders,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadReminders, addReminder, remindersLoaded } from '../App/actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onReminderAdd: (reminder) => {
    dispatch(addReminder(reminder));
  },
  loadUserReminders: () => {
    dispatch(loadReminders());
  },
  updateReminders: (reminders) => {
    dispatch(remindersLoaded(reminders));
  }
});

const mapStateToProps = createStructuredSelector({
  reminders: makeSelectReminders(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
