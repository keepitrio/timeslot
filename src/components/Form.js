import React, { useState, useEffect } from "react";
import { debounce } from 'lodash';

const defaultTimeSlot = {
  id: null,
  activityName: null,
  date: null,
  startTime: null,
  endTime: null,
  numMaxGuests: null,
};

const validateSlot = (slot = {}) => {
  if (Object.keys(slot).length > 0) {
    return Object.values(slot).every((v) => v !== null);
  }
};

const Form = ({ setCurrentSlot, setEnableSave, data }) => {
  const initialTimeSlot = data ? data : defaultTimeSlot;
  const [currentTimeSlot, setCurrentTimeSlot] = useState(initialTimeSlot);
  // if endTime is larger than startTime, throw error
  const setValue = debounce((event) => {
    const { name } = event.target;
    const { value } = event.target;
    // if startTime > endTime or endTime < startTime, return with alert
    if (name === "startTime") {
      if (value > currentTimeSlot["endTime"]) {
        event.target.value = "";
        return alert("start time must be before end time");
      }
    }
    if (name === "endTime") {
      if (currentTimeSlot["startTime"] > value) {
        event.target.value = "";
        return alert("start time must be before end time");
      }
    }

    const addStuff = { [name]: value, id: Date.now() };
    setCurrentTimeSlot({ ...currentTimeSlot, ...addStuff });
  }, 300);

  useEffect(() => {
    if (validateSlot(currentTimeSlot)) {
      setEnableSave(true);
      setCurrentSlot(currentTimeSlot);
    }
  }, [currentTimeSlot])

  return (
    <form action="" method="get" className="form-example">
      <div className="form-example">
        <label htmlFor="name">Activity Name: </label>
        <input
          type="text"
          name="activityName"
          id="name"
          required
          onChange={(v) => setValue(v)}
          defaultValue={currentTimeSlot.activityName}
        />
      </div>
      <div className="form-example">
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          required
          onChange={(v) => setValue(v)}
          defaultValue={currentTimeSlot.date}
        />
      </div>
      <div className="form-example">
        <label htmlFor="startTime">Start Time: </label>
        <input
          type="time"
          name="startTime"
          id="startTime"
          required
          onChange={(v) => setValue(v)}
          defaultValue={currentTimeSlot.startTime}
        />
      </div>
      <div className="form-example">
        <label htmlFor="endTime">End Time: </label>
        <input
          type="time"
          name="endTime"
          id="endTime"
          required
          onChange={(v) => setValue(v)}
          defaultValue={currentTimeSlot.endTime}
        />
      </div>
      <div className="form-example">
        <label htmlFor="numMaxGuests"># Max Guests: </label>
        <input
          type="numMaxGuests"
          name="numMaxGuests"
          id="numMaxGuests"
          required
          onChange={(v) => setValue(v)}
          defaultValue={currentTimeSlot.numMaxGuests}
        />
      </div>
    </form>
  );
};

export default Form;
