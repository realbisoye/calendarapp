import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import Reminder from '../Reminder';
import './style.scss';

function CalendarDay(props) {
  const {
    reminders, day, onDrop, openAddModal
  } = props;

  const onReminderDrop = (item) => onDrop(item, day);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Reminder',
    drop: onReminderDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let backgroundColor = '#cbcbcc';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  const addReminder = () => openAddModal(day);
  return (
    <div className="calendar-day" style={{ backgroundColor }} ref={drop} onDoubleClick={addReminder}>
      <span className="day">{day}</span>
      {reminders && !!reminders.length && reminders.map((r) => <Reminder key={r.id} reminder={r} />)}
    </div>
  );
}

CalendarDay.propTypes = {
  day: PropTypes.number,
  onDrop: PropTypes.func,
  reminders: PropTypes.array,
  openAddModal: PropTypes.func,
};

export default CalendarDay;
