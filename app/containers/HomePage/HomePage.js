/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import CalendarContainer from '../../components/CalendarContainer';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { loadUserReminders } = this.props;
    loadUserReminders();
  }

  render() {
    const {
      loading, error, onReminderAdd, reminders, updateReminders
    } = this.props;

    return (
      <DndProvider backend={HTML5Backend}>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A simple calendar application" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Simple Calendar with Reminders</h2>
          </section>
          <section>
            <CalendarContainer reminders={reminders} onReminderAdd={onReminderAdd} updateReminders={updateReminders} />
          </section>
        </div>
      </DndProvider>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  reminders: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onReminderAdd: PropTypes.func,
  loadUserReminders: PropTypes.func,
  updateReminders: PropTypes.func,
};
