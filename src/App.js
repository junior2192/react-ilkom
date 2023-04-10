import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transaction from "./components/Transaction";

function App() {
  const initTransaction = [
    {
      id: "619941539070",
      tanggal: new Date("01 Nov 2022 9:30").getTime(),
      keterangan: "Gaji bulanan",
      niominal: 2500000,
    },
    {
      id: "749179155708",
      tanggal: new Date("23 Nov 2022 10:00").getTime(),
      keterangan: "Uang lembur",
      nominal: 750000,
    },
    {
      id: "568004092688",
      tanggal: new Date("24 Sept 2022 10:30").getTime(),
      keterangan: "Beli sepatu",
      nominal: -150000,
    },
  ];

  const [transactions, setTransaction] = useState(initTransaction);

  return (
    <React.Fragment>
      <Header />
      <Transaction transactions={transactions} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
