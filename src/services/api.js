import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const params = { vs_currency: "usd", order: "market_cap_desc", per_page: 10 };

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    return [];
  }
};
