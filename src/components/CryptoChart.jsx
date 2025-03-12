import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const CryptoChart = ({ coinId }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!coinId) return; // Empêche la requête si coinId est vide

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`)
      .then((response) => {
        const formattedData = response.data.prices.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));
        setChartData(formattedData);
      })
      .catch((error) => {
        console.error("Erreur API:", error.response?.status, error.response?.data);
      });
  }, [coinId]);

  return (
    <div className="crypto-chart">
      <h3 className="crypto-chart__h3">Évolution sur 7 jours</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;

