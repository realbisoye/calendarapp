import React, { useState } from 'react';
import dateFns from 'date-fns';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import './style.scss';

const Reminder = ({ day, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(dateFns.format(new Date(), 'HH:mm:ss'));
  const createReminder = () => {
    const reminder = {
      id: uuid(),
      day,
      time,
      title,
    };
    onSubmit(reminder);
  };
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="add-reminder-wrapper">
      <h6 className="header">Reminder for {dateFns.format(day, 'DD, MMMM, YYYY')}</h6>
      <input className="input" type={'text'} maxLength={30} onChange={onTitleChange} value={title} />
      <input className="input" type="time" onChange={onTimeChange} value={time} />
      <button className="submit-button" type="submit" onClick={createReminder}>Create</button>
    </div>
  );
};

Reminder.propTypes = {
  day: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default Reminder;
