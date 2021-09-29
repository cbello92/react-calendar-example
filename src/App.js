import React from 'react'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const days = [20, 25 ,30]


const App = () => {
  return (
    <div style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Calendar
          defaultActiveStartDate={new Date()}
          tileClassName={({ activeStartDate, date, view }) => {
            return days.find(x => x === date.getDate()) ? 'react-calendar__tile--active' : null
          }}
          tileDisabled={({ activeStartDate, date, view }) => {
            return !days.find(x => x === date.getDate())
          }}
        />
      </div>
    </div>
  )
}

export default App
