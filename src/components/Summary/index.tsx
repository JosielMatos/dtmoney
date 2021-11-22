import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outlayImg from "../../assets/outlay.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (a, transaction) => {
      if (transaction.type === "deposit") {
        a.deposits += transaction.amount;
        a.balance += transaction.amount;
      } else {
        a.withdraws += transaction.amount;
        a.balance -= transaction.amount;
      }
      return a;
    },
    {
      deposits: 0,
      withdraws: 0,
      balance: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt='Income' />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Expenses</p>
          <img src={outlayImg} alt='Outlay' />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Balance</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.balance)}
        </strong>
      </div>
    </Container>
  );
}
