import axios from "axios";

export const get200Coins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=24h"
    );
    console.log("Coin Data:", response.data);
    return response.data; // ✅ just return data
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // ✅ safe fallback
  }
};
