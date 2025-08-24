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

import React from "react";
import Header from "../components/common/Header/header";
import Loader from "../components/common/Loader/Loader";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import SelectCoins from "../components/Compare/SelectCoins/SelectCoins";


function ComparePage() {
  return (
    <div>
      <Header/>
      <SelectCoins/>
      <SelectDays/>
    </div>
  );
}

export default ComparePage;
