import React, { useState } from 'react';
import Modal from './Modal';
import { ActionButton } from './styled';

const ActionButtons = ({ id, dispatch, data }) => {
  const [showModal, setShowForm] = useState(false);
  const updateOnClick = (newSlot) => {
    dispatch({ type: "UPDATE_SLOT", id, newSlot });
  };

  return (
    <>
      <div>
        <ActionButton onClick={() => dispatch({ type: "DELETE_SLOT", id })}>
          Cancel
        </ActionButton>
        <ActionButton onClick={() => setShowForm(true)}>Update</ActionButton>
      </div>
      {showModal && <Modal data={data} setShowForm={setShowForm} addToTimeSlots={updateOnClick} />}
    </>
  );
};

export default ActionButtons;
