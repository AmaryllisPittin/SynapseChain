import { useEffect, useState } from "react";
import { fetchCryptoData } from "../services/api";
import CryptoChart from "./CryptoChart";
import SearchBar from "./SearchBar";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCryptoData()
      .then((data) => setCryptoData(data))
      .catch((error) => console.error("Erreur API:", error));
  }, []);

  // 🔍 Filtrer les cryptos en fonction de la recherche
  const filteredCryptoData = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-list">
      <h2 className="crypto-list__h2">Top Cryptos</h2>
      <SearchBar onSearch={setSearch} /> {/* Mise à jour de l'état search */}

      <ul>
        {filteredCryptoData.map((coin) => (
          <li
            key={coin.id}
            className="crypto-item"
            onClick={() => setSelectedCoin(coin.id)}
          >
            <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
            <span>${coin.current_price.toLocaleString()}</span>
          </li>
        ))}
      </ul>

      {selectedCoin && <CryptoChart coinId={selectedCoin} />}
    </div>
  );
};

export default CryptoList;



