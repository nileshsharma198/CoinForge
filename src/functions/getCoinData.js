import axios from "axios";

export const getCoinData = async (id) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data; // return actual data
  } catch (error) {
    console.log("Error fetching data:", error);
    return null; // let component handle error
  }
};
