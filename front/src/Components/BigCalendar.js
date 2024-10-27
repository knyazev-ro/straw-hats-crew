import React, { useState } from 'react';
import dayjs from 'dayjs';

const BigCalendar = ({ events=[] }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const daysInMonth = endOfMonth.date();

  const handlePrevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const handleNextMonth = () => setCurrentDate(currentDate.add(1, 'month'));
  const handleDateClick = (day) => setSelectedDate(day);

  const getEventsForDate = (date) => events.filter(event => dayjs(event.date).isSame(date, 'day'));

  return (
    <div className="p-8 bg-yellow-100 text-black">
      {/* Заголовок с переключением месяцев */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="text-yellow-700 font-bold">← Пред. месяц</button>
        <h2 className="text-2xl font-semibold text-yellow-900">{currentDate.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth} className="text-yellow-700 font-bold">След. месяц →</button>
      </div>

      {/* Сетка календаря */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = startOfMonth.add(i, 'day');
          const eventsForDay = getEventsForDate(day);

          return (
            <div
              key={i}
              onClick={() => handleDateClick(day)}
              className={`p-4 rounded-lg cursor-pointer border ${
                selectedDate && day.isSame(selectedDate, 'day')
                  ? 'bg-yellow-300 border-yellow-500'
                  : 'bg-yellow-50 border-yellow-200'
              } hover:bg-yellow-200`}
            >
              <div className="text-xl font-semibold text-yellow-900">{day.date()}</div>
              {/* Отображение событий в виде точек */}
              {eventsForDay.length > 0 && (
                <div className="flex justify-center mt-1">
                  {eventsForDay.map((event, idx) => (
                    <span key={idx} className="w-2 h-2 bg-yellow-500 rounded-full mx-0.5"></span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Отображение событий для выбранного дня */}
      <div className="mt-6 bg-yellow-200 p-4 rounded-lg border border-yellow-400 shadow-md">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          {selectedDate ? `События на ${selectedDate.format('D MMMM YYYY')}` : 'Выберите день для просмотра событий'}
        </h3>
        <ul>
          {(selectedDate ? getEventsForDate(selectedDate) : []).map((event, idx) => (
            <li key={idx} className="mb-1 text-black">
              <span className="font-bold text-yellow-800">{event.title}:</span> {event.description}
            </li>
          ))}
          {selectedDate && getEventsForDate(selectedDate).length === 0 && (
            <li className="text-gray-600">Нет событий на выбранный день</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BigCalendar;
