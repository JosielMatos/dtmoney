import Modal from "react-modal";

import { Container, NewTransactionTypeContainer } from "./styles";

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outlayImg from '../../assets/outlay.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// 152 139 199	

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="modal-close-button">
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container>
        <h2>Register Transaction</h2>

        <input placeholder="Title" />
        <input type="number" placeholder="Amount" />

        <NewTransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>
          <button type="button">
            <img src={outlayImg} alt="Outlay" />
            <span>Expense</span>
          </button>
        </NewTransactionTypeContainer>

        <input placeholder="Category" />
        <button type="submit">Submit</button>
      </Container>
    </Modal>
  );
}
