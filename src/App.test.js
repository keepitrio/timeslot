import { render, screen, fireEvent } from "@testing-library/react";
import TimeSlots from './components/TimeSlots';
import ActionButtons from './components/ActionButtons';
import SlotForm from './components/SlotForm';

test('renders new time slot button', () => {
  render(<TimeSlots />);
  const addSlotBtn = screen.getByText(/Add New Time Slot/i);
  expect(addSlotBtn).toBeInTheDocument();
});

test('renders two buttons in action button component', () => {
  const props = {
    id: 'someId',
    dispatch: () => {},
    data: {}
  };

  render(<ActionButtons props={{...props}} />);
  const updateBtn = screen.getByText(/Update/i);
  const cancelBtn = screen.getByText(/Cancel/i);
  expect(updateBtn).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();
});

test('renders SlotForm component', () => {
  const props = {
    hideForm: () => {},
    onSave: () => {},
    data: {},
  };

  const { container } = render(<SlotForm props={{ ...props }} />);
  const saveBtn = screen.getByText(/Save/i);
  const form = container.querySelector('form');
  expect(saveBtn).toBeInTheDocument();
  expect(form).toBeInTheDocument();
});
