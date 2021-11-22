import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outlayImg from "../../assets/outlay.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt='Income' />
        </header>
        <strong>$4000,00</strong>
      </div>

      <div>
        <header>
          <p>Expenses</p>
          <img src={outlayImg} alt='Outlay' />
        </header>
        <strong>- $1100,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Balance</p>
          <img src={totalImg} alt='Total' />
        </header>
        <strong>$2900,00</strong>
      </div>
    </Container>
  );
}
