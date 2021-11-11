import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Develpment</td>
            <td className='deposit'>$3000,00</td>
            <td>Development</td>
            <td>07/21/2021</td>
          </tr>

          <tr>
            <td>House Rent</td>
            <td className='withdraw'>-$1100,00</td>
            <td>Rent</td>
            <td>08/12/2021</td>
          </tr>

          <tr>
            <td>Website Develpment</td>
            <td className='deposit'>$1000,00</td>
            <td>Development</td>
            <td>06/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
