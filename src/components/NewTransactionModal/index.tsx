import Modal from "react-modal";

import { Container, NewTransactionTypeContainer, TypeBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outlayImg from "../../assets/outlay.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='modal-close-button'
      >
        <img src={closeImg} alt='Close modal' />
      </button>

      <Container>
        <h2>Register Transaction</h2>

        <input placeholder='Title' />
        <input type='number' placeholder='Amount' />

        <NewTransactionTypeContainer>
          <TypeBox
            type='button'
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt='Income' />
            <span>Income</span>
          </TypeBox>
          <TypeBox
            type='button'
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === 'withdraw'}
          >
            <img src={outlayImg} alt='Outlay' />
            <span>Expense</span>
          </TypeBox>
        </NewTransactionTypeContainer>

        <input placeholder='Category' />
        <button type='submit'>Submit</button>
      </Container>
    </Modal>
  );
}
