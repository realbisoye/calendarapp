import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import './style.scss';

const Reminder = ({ reminder, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { id: reminder.id, type: 'Reminder' },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div className="reminder" ref={drag} style={{ opacity }}>
      {isDropped ? <s className="title">{reminder.title}</s> : <span className="title">{reminder.title}</span>}
    </div>
  );
};

Reminder.propTypes = {
  isDropped: PropTypes.bool,
  reminder: PropTypes.object,
};

export default Reminder;
