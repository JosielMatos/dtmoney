import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

//Fake API
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelance',
          amount: 5000,
          category: 'Freelance',
          type: 'deposit',
          createdAt: new Date('2021-09-10 10:00:00'),
        },
        {
          id: 2,
          title: 'House Rent',
          amount: 500,
          category: 'Rent',
          type: 'withdraw',
          createdAt: new Date('2021-09-12 11:00:00'),
        },
        {
          id: 3,
          title: 'Investment profit',
          amount: 2000,
          category: 'Investment',
          type: 'deposit',
          createdAt: new Date('2021-09-17 07:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction')
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
