import React from "react";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import CryptoChart from "./components/CryptoChart"

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoList />
      <CryptoChart />
    </div>
  );
}

export default App;
