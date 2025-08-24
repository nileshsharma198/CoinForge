import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header/header";
import Loader from "../components/common/Loader/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart/LineChart";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import { SettingChartData } from "../functions/SettingChartData";
import PriceType from "../components/Coin/PriceType/PriceType";
import Button from "../components/common/Button/Button";
import BackToTop from "../components/common/BackToTop/BackToTop";

function CoinPage() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // for initial coin fetch
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [priceType, setPriceType] = useState("prices");

  // Fetch full coin data only when id changes
  useEffect(() => {
    if (id) fetchCoin();
  }, [id]);

  const fetchCoin = async () => {
    setIsLoading(true);
    const data = await getCoinData(id, setError);
    if (data) {
      coinObject(data, setCoinData);
      const prices = await getCoinPrices(id, days, priceType, setError);
      if (prices?.length) SettingChartData(setChartData, prices, days);
    }
    setIsLoading(false);
  };

  const handleDaysChange = async (event) => {
    const value = event.target.value;
    setDays(value);
    const prices = await getCoinPrices(id, value, priceType, setError);
    if (prices?.length) SettingChartData(setChartData, prices, value);
  };

  const handlePriceTypeChange = async (_, newType) => {
    if (!newType) return;
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType, setError);
    if (prices?.length) SettingChartData(setChartData, prices, days);
  };

  return (
    <div>
      <Header />
      {!error && !isLoading && coinData.id ? (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} disablePointer />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>
            <BackToTop/>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      ) : error ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>Sorry, Couldn't find the coin you're looking for 😞</h1>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CoinPage;

