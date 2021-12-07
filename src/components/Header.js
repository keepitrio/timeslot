import React from 'react';
import { HeaderContainer, Button } from './styled';

const Header = ({ setShowForm }) => (
  <HeaderContainer onClick={() => setShowForm(true)}>
    <Button enableSave>Add New Time Slot</Button>
  </HeaderContainer>
);

export default Header;
