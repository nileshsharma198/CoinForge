// import React, { useEffect, useState } from "react";
// import Header from "../components/common/Header/header";
// import SelectCoins from "../components/Compare/SelectCoins/SelectCoins";
// import SelectDays from "../components/Coin/SelectDays/SelectDays";
// import { coinObject } from "../functions/convertObject";
// import { getCoinData } from "../functions/getCoinData";
// import { getCoinPrices } from "../functions/getCoinPrices";
// import { SettingChartData } from "../functions/SettingChartData";
// import Loader from "../components/common/Loader/Loader";
// import List from "../components/Dashboard/List/List";
// import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
// import LineChart from "../components/Coin/LineChart/LineChart";

// function ComparePage() {
//   const [crypto1, setCrypto1] = useState("bitcoin");
//   const [crypto2, setCrypto2] = useState("ethereum");
//   const [crypto1Data, setCrypto1Data] = useState({});
//   const [crypto2Data, setCrypto2Data] = useState({});
//   const [days, setDays] = useState(30);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [priceType, setPriceType] = useState("prices");
//   const [chartData, setChartData] = useState({})

//   function handleDaysChange(event) {
//     setDays(event.target.value);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     try {
//       setIsLoading(true);

//       const [data1, data2] = await Promise.all([
//         getCoinData(crypto1, setError),
//         getCoinData(crypto2, setError),
//       ]);

//       if (data1) coinObject(data1, setCrypto1Data);
//       if (data2) coinObject(data2, setCrypto2Data);

//       if (data1 && data2) {
//         const [prices1, prices2] = await Promise.all([
//           getCoinPrices(crypto1, days, "prices", setError),
//           getCoinPrices(crypto2, days, "prices", setError),
//         ]);

//         if (prices1.length > 0 && prices2.length > 0) {
//           console.log("Both Fetched", prices1, prices2);
//           SettingChartData(setChartData, [prices1, prices2], days);
//         }
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   const handleCoinChange = async (event, isCoin2) => {
//     try {
//       setIsLoading(true);

//       if (isCoin2) {
//         setCrypto2(event.target.value);
//         const data = await getCoinData(event.target.value, setError);
//         coinObject(data, setCrypto2Data);

//         const prices1 = await getCoinPrices(crypto1, days, priceType, setError);
//         const prices2 = await getCoinPrices(crypto2, days, priceType, setError);
//         if (prices1.length > 0 && prices2.length > 0) {
//           console.log("Both Fetched", prices1, prices2);
//           SettingChartData(setChartData, [prices1, prices2], days);
//         }
//       } else {
//         setCrypto1(event.target.value);
//         const data = await getCoinData(event.target.value, setError);
//         coinObject(data, setCrypto1Data);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <div className="coins-days-flex">
//             <SelectCoins
//               crypto1={crypto1}
//               crypto2={crypto2}
//               handleCoinChange={handleCoinChange}
//             />
//             {/* Days Selector */}
//             <SelectDays days={days} handleDaysChange={handleDaysChange} />
//           </div>
//           <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
//             <List coin={crypto1Data} disablePointer />
//           </div>
//           <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
//             <List coin={crypto2Data} disablePointer />
//           </div>

//            <LineChart chartData={chartData} priceType={priceType}/>

//           <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
//           <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
//         </>
//       )}
//     </div>
//   );
// }

// export default ComparePage;

// import React, { useState } from "react";
// import Header from "../components/common/Header/header";
// import Loader from "../components/common/Loader/Loader";
// import SelectDays from "../components/Coin/SelectDays/SelectDays";
// import List from "../components/Dashboard/List/List";
// import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
// import SelectCoins from "../components/Compare/SelectCoins/SelectCoins";
// import { getCoinData} from "../functions/getCoinData";
// import { getCoinPrices } from "../functions/getCoinPrices";
// import { coinObject } from "../functions/convertObject";
// import { SettingChartData } from "../functions/SettingChartData";

// function ComparePage() {
//   const [crypto1, setCrypto1] = useState("bitcoin");
//   const [crypto2, setCrypto2] = useState("ethereum");
//   const [days, setDays] = useState(30);
//   const [crypto1Data, setCrypto1Data] = useState({});
//   const [crypto2Data, setCrypto2Data] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   function handleDaysChange(event) {
//     setDays(event.target.value);
//   }

//   const handleCoinChange = async (event, isCoin2) => {
//     const selectedCoin = event.target.value;
//     setIsLoading(true);

//     if (isCoin2) {
//       setCrypto2(selectedCoin);
//       console.log("Crypto2 id", selectedCoin);

//       const data = await getCoinData(selectedCoin);
//       if (data) {
//         coinObject(data, setCrypto2Data);
//         const prices = await getCoinPrices(selectedCoin, days, "prices");
//         // if (prices?.length) SettingChartData(setChartData, prices, days);
//       }
//     } else {
//       setCrypto1(selectedCoin);
//       console.log("Crypto1 id", selectedCoin);

//       const data = await getCoinData(selectedCoin);
//       if (data) {
//         coinObject(data, setCrypto1Data);
//         const prices = await getCoinPrices(selectedCoin, days, "prices");
//         // if (prices?.length) SettingChartData(setChartData, prices, days);
//       }
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="coins-days-flex">
//         <SelectCoins
//           crypto1={crypto1}
//           crypto2={crypto2}
//           handleCoinChange={handleCoinChange}
//         />
//         <SelectDays days={days} handleDaysChange={handleDaysChange} />
//       </div>

//       {/* ✅ Loader while fetching */}
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="compare-content">
         
//           <CoinInfo data={crypto1Data} />
//           <CoinInfo data={crypto2Data} />
          
//           <List />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ComparePage;


// import React, { useEffect, useState } from "react";
// import Header from "../components/common/Header/header";
// import SelectCoins from "../components/Compare/SelectCoins/SelectCoins";
// import SelectDays from "../components/Coin/SelectDays/SelectDays";
// import { coinObject } from "../functions/convertObject";
// import { getCoinData } from "../functions/getCoinData";
// import { getCoinPrices } from "../functions/getCoinPrices";
// import { SettingChartData } from "../functions/SettingChartData";
// import Loader from "../components/common/Loader/Loader";
// import List from "../components/Dashboard/List/List";
// import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
// import LineChart from "../components/Coin/LineChart/LineChart";
// import PriceType from "../components/Coin/PriceType/PriceType";

// function ComparePage() {
//   const [crypto1, setCrypto1] = useState("bitcoin");
//   const [crypto2, setCrypto2] = useState("ethereum");
//   const [crypto1Data, setCrypto1Data] = useState({});
//   const [crypto2Data, setCrypto2Data] = useState({});
//   const [days, setDays] = useState(30);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [priceType, setPriceType] = useState("prices");
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });

//   // fetch prices whenever days or priceType changes
//   useEffect(() => {
//     if (crypto1 && crypto2) {
//       fetchPrices(days, priceType);
//     }
//   }, [days, priceType]);

//   // fetch prices helper
//   const fetchPrices = async (d, type) => {
//     const [prices1, prices2] = await Promise.all([
//       getCoinPrices(crypto1, d, type, setError),
//       getCoinPrices(crypto2, d, type, setError),
//     ]);

//     if (prices1?.length && prices2?.length) {
//       SettingChartData(setChartData, [prices1, prices2], d);
//     }
//   };

//   // fetch both coins initially (first load)
//   useEffect(() => {
//     const fetchInitial = async () => {
//       setIsLoading(true);
//       const [data1, data2] = await Promise.all([
//         getCoinData(crypto1, setError),
//         getCoinData(crypto2, setError),
//       ]);
//       if (data1) coinObject(data1, setCrypto1Data);
//       if (data2) coinObject(data2, setCrypto2Data);
//       await fetchPrices(days, priceType);
//       setIsLoading(false);
//     };
//     fetchInitial();
//   }, []);

//   const handleDaysChange = (event) => {
//     setDays(event.target.value);
//   };

//   const handlePriceTypeChange = (_, newType) => {
//     if (newType) setPriceType(newType);
//   };

//   // ✅ now update coin immediately + fetch its data
//   const handleCoinChange = async (event, isCoin2) => {
//     const selected = event.target.value;
//     setIsLoading(true);
//     if (isCoin2) {
//       setCrypto2(selected);
//       const data = await getCoinData(selected, setError);
//       if (data) coinObject(data, setCrypto2Data);
//     } else {
//       setCrypto1(selected);
//       const data = await getCoinData(selected, setError);
//       if (data) coinObject(data, setCrypto1Data);
//     }
//     // refresh prices for new pair
//     await fetchPrices(days, priceType);
//     setIsLoading(false);
//   };

//   return (
//     <div>
//       <Header />
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <div className="coins-days-flex">
//             <SelectCoins
//               crypto1={crypto1}
//               crypto2={crypto2}
//               handleCoinChange={handleCoinChange}
//             />
//             <SelectDays days={days} handleDaysChange={handleDaysChange} />
//             <PriceType
//               priceType={priceType}
//               handlePriceTypeChange={handlePriceTypeChange}
//             />
//           </div>

//           <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
//             <List coin={crypto1Data} disablePointer />
//           </div>
//           <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
//             <List coin={crypto2Data} disablePointer />
//           </div>

//           <LineChart chartData={chartData} priceType={priceType} />

//           <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
//           <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
//         </>
//       )}
//     </div>
//   );
// }

// export default ComparePage;

import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/header";
import SelectCoins from "../components/Compare/SelectCoins/SelectCoins";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import { coinObject } from "../functions/convertObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { SettingChartData } from "../functions/SettingChartData";
import Loader from "../components/common/Loader/Loader";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import LineChart from "../components/Coin/LineChart/LineChart";
import PriceType from "../components/Coin/PriceType/PriceType";
import BackToTop from "../components/common/BackToTop/BackToTop";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  // cache coin info so switching back doesn’t refetch
  const [coinCache, setCoinCache] = useState({});

  // fetch chart prices
  // const fetchPrices = async (d, type) => {
  //   try {
  //     const [prices1, prices2] = await Promise.all([
  //       getCoinPrices(crypto1, d, type, setError),
  //       getCoinPrices(crypto2, d, type, setError),
  //     ]);
  //     if (prices1?.length && prices2?.length) {
  //       SettingChartData(setChartData, [prices1, prices2], d);
  //     }
  //   } catch (err) {
  //     console.log("Error fetching prices:", err);
  //   }
  // };

    // fetch chart prices
const fetchPrices = async (d, type) => {
  try {
    const [prices1, prices2] = await Promise.all([
      getCoinPrices(crypto1, d, type, setError),
      getCoinPrices(crypto2, d, type, setError),
    ]);

    if (prices1?.length && prices2?.length) {
      // ✅ ensure both have equal length
      const minLength = Math.min(prices1.length, prices2.length);
      const trimmed1 = prices1.slice(0, minLength);
      const trimmed2 = prices2.slice(0, minLength);

      // ✅ call correctly
      SettingChartData(setChartData, trimmed1, d, trimmed2, crypto1, crypto2);
    }
  } catch (err) {
    console.log("Error fetching prices:", err);
  }
};


  // fetch both coins initially and whenever they change
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // check cache before hitting API
      let data1 = coinCache[crypto1];
      let data2 = coinCache[crypto2];

      if (!data1) {
        const resp1 = await getCoinData(crypto1, setError);
        if (resp1) {
          coinObject(resp1, setCrypto1Data);
          setCoinCache((prev) => ({ ...prev, [crypto1]: resp1 }));
        }
      } else {
        coinObject(data1, setCrypto1Data);
      }

      if (!data2) {
        const resp2 = await getCoinData(crypto2, setError);
        if (resp2) {
          coinObject(resp2, setCrypto2Data);
          setCoinCache((prev) => ({ ...prev, [crypto2]: resp2 }));
        }
      } else {
        coinObject(data2, setCrypto2Data);
      }

      // fetch prices (1 call per coin only)
      await fetchPrices(days, priceType);

      setIsLoading(false);
    };
    fetchData();
  }, [crypto1, crypto2]); // 👈 runs when coin changes

  // refetch only prices when days or priceType changes
  useEffect(() => {
    if (crypto1 && crypto2) {
      fetchPrices(days, priceType);
    }
  }, [days, priceType]);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handlePriceTypeChange = (_, newType) => {
    if (newType) setPriceType(newType);
  };

  const handleCoinChange = (event, isCoin2) => {
    const selected = event.target.value;
    if (isCoin2) {
      setCrypto2(selected);
    } else {
      setCrypto1(selected);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>

          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} disablePointer />
          </div>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} disablePointer />
          </div>

          <div className="grey-wrapper">
            <PriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
          />
          <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
          
          </div>
          <BackToTop/>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}

export default ComparePage;



