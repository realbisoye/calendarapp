import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function CalendarHeader(props) {
  const { year, month, onButtonClick } = props;
  const prevMonth = () => onButtonClick('backward');
  const nextMonth = () => onButtonClick('forward');
  return (
    <div className="calendar-header">
      <button className="button" onClick={prevMonth} type={'button'}>{'<'}</button>
      <span className="active-month">{month} {year}</span>
      <button className="button" onClick={nextMonth} type={'button'}>{'>'}</button>
    </div>
  );
}

CalendarHeader.propTypes = {
  year: PropTypes.string,
  month: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default CalendarHeader;
