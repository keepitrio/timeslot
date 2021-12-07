import React, { useState, useReducer } from 'react';
import Header from './Header';
import Table from './Table';
import Modal from './Modal';
import { ModalContainer } from './styled';

const sortData = (data = null) => {
  return data.sort((a, b) => {
    // first make sure date is larger
    const dateA = new Date(a.date + ' ' + a.startTime + ':00');
    const dateB = new Date(b.date + ' ' + b.startTime + ':00');
    if(dateA.getTime() < dateB.getTime()) return -1;
    if(dateA.getTime() > dateB.getTime()) return 1;
    return 0;
  });
};

const initialState = {
  slots: [
    {
      id: 0,
      activityName: "Walking Tour",
      date: "2021-10-10",
      startTime: "11:00",
      endTime: "13:00",
      numMaxGuests: 10,
    },
    {
      id: 1,
      activityName: "Walking Tour",
      date: "2021-10-11",
      startTime: "11:00",
      endTime: "13:00",
      numMaxGuests: 10,
    },
  ],
};

export const reducer = (state, action) => {
  let updatedSlots;
  let sortedSlots;
  switch (action.type) {
    case "ADD_SLOT":
      const slots = [...state.slots, action.newSlot];
      sortedSlots = sortData(slots);
      return { ...state, slots: sortedSlots };
    case "UPDATE_SLOT":
      const slotsCopy = [...state.slots];
      const { id, newSlot } = action;

      updatedSlots = slotsCopy.map(currentSlot => {
        if (currentSlot.id === id) return newSlot;
        return currentSlot;
      });
      sortedSlots = sortData(updatedSlots);
      return { ...state, slots: sortedSlots };
    case "DELETE_SLOT":
      const deleteId = action.id;

      updatedSlots = state.slots.filter((slot) => slot.id !== deleteId);
      return { ...state, slots: updatedSlots };
    default:
      return state;
  }
};

const TimeSlots = () => {
  const [timeSlots, dispatch] = useReducer(reducer, initialState);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* header will have CTA */}
      <Header setShowForm={setShowForm} />
      {/* Table to list timeslots */}
      <Table data={timeSlots.slots} dispatch={dispatch} />
      {/* Form modal */}
      {showForm && (
        <ModalContainer>
          <Modal setShowForm={setShowForm} addToTimeSlots={(slot) => dispatch({ type: 'ADD_SLOT', newSlot: slot })} />
        </ModalContainer>
      )}
    </div>
  );
}

export default TimeSlots;