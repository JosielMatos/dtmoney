import Modal from "react-modal";
import { FormEvent, useState } from "react";

import { Container, NewTransactionTypeContainer, TypeBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outlayImg from "../../assets/outlay.svg";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post("/transactions", data);
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>

        <input
          placeholder='Title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='number'
          placeholder='Amount'
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <NewTransactionTypeContainer>
          <TypeBox
            type='button'
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor='green'
          >
            <img src={incomeImg} alt='Income' />
            <span>Income</span>
          </TypeBox>
          <TypeBox
            type='button'
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor='red'
          >
            <img src={outlayImg} alt='Outlay' />
            <span>Expense</span>
          </TypeBox>
        </NewTransactionTypeContainer>

        <input
          placeholder='Category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type='submit'>Submit</button>
      </Container>
    </Modal>
  );
}
