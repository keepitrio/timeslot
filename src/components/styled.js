import styled, { css } from 'styled-components';
import close from '../images/close-line.svg';

// Main View Page Styles
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 60px;
  border: 2px solid black;
  margin: 8px;
  padding: 0px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 16px;
  &:hover {
    background-color: black;
    color: white;
  }
  
  ${({ enableSave }) => !enableSave && css`
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
      color: grey;
      border: 2px solid grey;
    }
  `}
`;

// Modal Styles
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

// Form Styles
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 600px;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: white;
  border-radius: 8px;
`;

export const ButtonContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url(${close});
  margin: 16px;
`;

// Table Styles
export const TableContainer = styled.div`
  position: relative;
  height: 800px;
  margin: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CellContainer = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableHeader = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  background-color: black;
  color: white;

  ${CellContainer} {
    border: 1px solid grey;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 80px;
  position: absolute;

  ${CellContainer} {
    border: 1px solid black;
  }
`;

export const TableBodyRowContainer = styled.div`
  display: flex;
`;

// Action Button Styles
export const ActionButton = styled.div`
  cursor: pointer;
  margin: 8px;
  border: 1px solid black;
  border-radius: 60px;
  padding: 4px 8px;

  &:hover {
    color: white;
    background-color: black;
  }
`;
