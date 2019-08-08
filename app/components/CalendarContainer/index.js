import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'simple-react-modal';
import dateFns from 'date-fns';
import CalendarDay from '../CalendarDay';
import CalendarHeader from '../CalendarHeader';
import AddReminder from '../AddReminder';
import './style.scss';

function CalendarContainer(props) {
  const { reminders, onReminderAdd, updateReminders } = props;
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(dateFns.format(date, 'MMMM'));
  const [year, setYear] = useState(dateFns.format(date, 'YYYY'));
  const [daysInMonth, setDaysInMonth] = useState(dateFns.getDaysInMonth(date));
  const [openModal, toggleAddModal] = useState(false);

  const onMonthChange = (direction) => {
    let newDate;
    if (direction === 'forward') {
      newDate = dateFns.addMonths(date, 1);
    } else {
      newDate = dateFns.subMonths(date, 1);
    }
    setDate(newDate);
    setMonth(dateFns.format(newDate, 'MMMM'));
    setYear(dateFns.format(newDate, 'YYYY'));
    setDaysInMonth(dateFns.getDaysInMonth(newDate));
  };

  const openAddModal = (day) => {
    setDate(new Date(`${day}, ${month} ${year}`));
    toggleAddModal(true);
  };

  const closeModal = () => {
    toggleAddModal(false);
  };

  const createReminder = (reminder) => {
    onReminderAdd(reminder);
    closeModal();
  };
  const handleDrop = (item, day) => {
    const rems = [...reminders];
    const index = rems.findIndex((r) => item.id === r.id);

    if (index > -1) {
      const rem = rems[index];
      rem.day = new Date(`${day}, ${month} ${year}`);
      rems[index] = rem;
      updateReminders(rems);
    }
  };
  const days = [...Array(daysInMonth).keys()];

  const renderDay = (item) => {
    const day = item + 1;
    const today = new Date(`${day}, ${month} ${year}`);
    const dayReminders = reminders.filter((r) => dateFns.isSameDay(new Date(r.day), today));
    return (
      <CalendarDay
        key={item}
        day={day}
        onDrop={handleDrop}
        reminders={dayReminders}
        openAddModal={openAddModal}
      />
    );
  };

  return (
    <div className="calendar-container">
      <CalendarHeader month={month} year={year} onButtonClick={onMonthChange} />
      <div className="days-container">
        {days.map(renderDay)}
      </div>
      <Modal show={openModal} onClose={closeModal} transitionSpeed={1000}>
        <AddReminder day={date} onSubmit={createReminder} />
      </Modal>
    </div>
  );
}

CalendarContainer.propTypes = {
  reminders: PropTypes.array,
  onReminderAdd: PropTypes.func,
  updateReminders: PropTypes.func,
};

export default CalendarContainer;
