import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
          <strong>$10000,00</strong>
      </div>

      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
          <strong>- $500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Balance</p>
          <img src={totalImg} alt="Total" />
        </header>
          <strong>$9500,00</strong>
      </div>
    </Container>
  );
}