import React, { useState, useEffect } from 'react';
import Form from './Form';
import { FormContainer, ButtonContainer, CloseBtn, Button } from './styled';

const validateSlot = (slot = {}) => {
  if (Object.keys(slot).length > 0) {
    return Object.values(slot).every((v) => v !== null);
  }
};

const SlotForm = ({ hideForm, onSave, data }) => {
  const [currentSlot, setCurrentSlot] = useState({});
  const [validatedSlot, setValidatedSlot] = useState({});
  const [enableSave, setEnableSave] = useState(false);

  const onClickHandler = (v) => {
    if (enableSave) {
      hideForm();
      setValidatedSlot(validatedSlot);
      onSave(currentSlot);
    } else {
      return alert('please fill out the form');
    }
  };

  useEffect(() => {
    if (validateSlot(currentSlot)) {
      setEnableSave(true);
    }
  }, [currentSlot]);

  return (
    <FormContainer>
      <ButtonContainer>
        <CloseBtn onClick={() => hideForm()} />
      </ButtonContainer>
      <Form
        setCurrentSlot={(slot) => setCurrentSlot(slot)}
        setEnableSave={setEnableSave}
        data={data}
      />
      <ButtonContainer>
        <Button onClick={(v) => onClickHandler(v)} enableSave={enableSave}>
          Save
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default SlotForm;
