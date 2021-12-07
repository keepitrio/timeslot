import React from 'react';
import SlotForm from './SlotForm';
import { ModalContainer, Overlay } from './styled';

const Modal = ({ setShowForm, addToTimeSlots, data = null }) => {
  const formData = data ? data : null;
  return (
    <ModalContainer>
      <Overlay onClick={() => setShowForm(false)} />
      <SlotForm
        hideForm={() => setShowForm(false)}
        onSave={addToTimeSlots}
        data={formData}
      />
    </ModalContainer>
  );
};

export default Modal;
