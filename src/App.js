import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from 'date-fns/locale/en-US'

// import globalize from "globalize";
// require("./glovalize.ja.js");

import "react-big-calendar/lib/css/react-big-calendar.css";

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import './App.css';

const locales = {
  "en-US": enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: "MTG",
    allDay: true,
    start: new Date(2021,10,18),
    end: new Date(2021,10,18)
  },
  {
    title: "長期休暇",
    allDay: true,
    start: new Date(2021,10,19),
    end: new Date(2021,10,25)
  },
  {
    title: "出張",
    allDay: true,
    start: new Date(2021,10,26),
    end: new Date(2021,10,30)
  }
]


function App() {
  const [ newEvent, setNewEvent ] = useState({title: "", start: "", end: ""})
  const [ allEvents, setAllEvents ] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>カレンダー</h1>
      <h2>新規</h2>
      <div>
        <input type="text" placeholder="タイトル" style={{width: "20%", marginRight: "10px"}}
          value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent. start})} />

        <DatePicker placeholderText="End Date"
        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent. end})} />

        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar 
        localizer = {localizer}
        events = {allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{height:500, margin: "50px"}}
      />
    </div>
  );
}

export default App;
