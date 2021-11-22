import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import { Container, NewTransactionTypeContainer, TypeBox } from "./styles";

import { TransactionsContext } from "../../TransactionsContext";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outlayImg from "../../assets/outlay.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
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
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
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
