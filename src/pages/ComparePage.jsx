import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/header";
import SelectCoins from "../components/Compare/SelectCoins/SelectCoins";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import Loader from "../components/common/Loader/Loader";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { coinObject } from "../functions/convertObject";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import PriceType from "../components/Coin/PriceType/PriceType";
import LineChart from "../components/Coin/LineChart/LineChart";
import BackToTop from "../components/common/BackToTop/BackToTop";
import { SettingChartData } from "../functions/SettingChartData";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");

  const [cryptoDataCache, setCryptoDataCache] = useState({}); // cache coin details
  const [priceCache, setPriceCache] = useState({}); // cache prices by key

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState(null);

  // Fetch coin details (only when coin changes, not days/priceType)
  useEffect(() => {
    const fetchCoinData = async (coin, setter) => {
      if (cryptoDataCache[coin]) {
        setter(cryptoDataCache[coin]);
        return;
      }
      const data = await getCoinData(coin);
      if (data) {
        const formatted = {};
        coinObject(data, (obj) => Object.assign(formatted, obj));
        setter(formatted);
        setCryptoDataCache((prev) => ({ ...prev, [coin]: formatted }));
      }
    };

    setIsLoading(true);
    Promise.all([
      fetchCoinData(crypto1, setCrypto1Data),
      fetchCoinData(crypto2, setCrypto2Data),
    ]).finally(() => setIsLoading(false));
  }, [crypto1, crypto2]);

  // Fetch chart prices (depends on coin + days + priceType)
  useEffect(() => {
    const fetchPrices = async () => {
      const key1 = `${crypto1}_${days}_${priceType}`;
      const key2 = `${crypto2}_${days}_${priceType}`;

      let prices1 = priceCache[key1];
      let prices2 = priceCache[key2];

      if (!prices1) {
        prices1 = await getCoinPrices(crypto1, days, priceType);
        if (prices1) setPriceCache((prev) => ({ ...prev, [key1]: prices1 }));
      }

      if (!prices2) {
        prices2 = await getCoinPrices(crypto2, days, priceType);
        if (prices2) setPriceCache((prev) => ({ ...prev, [key2]: prices2 }));
      }

      if (prices1 && prices2) {
        SettingChartData(setChartData, prices1, days, prices2, crypto1, crypto2);
      }
    };

    fetchPrices();
  }, [crypto1, crypto2, days, priceType]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Dropdowns */}
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={(e, isSecond) =>
                isSecond ? setCrypto2(e.target.value) : setCrypto1(e.target.value)
              }
            />
          </div>

          {/* Coin 1 & 2 Lists */}
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} disablePointer />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} disablePointer />
          </div>

          {/* Chart */}
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={(e) => setDays(e.target.value)} />
            <PriceType priceType={priceType} handlePriceTypeChange={(e) => setPriceType(e.target.value)} />
            {chartData && (
              <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
            )}
          </div>

          <BackToTop />

          {/* Coin Info */}
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}

export default ComparePage;

