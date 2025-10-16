// import React from "react";
// import "./List.css";
// import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
// import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
// import Tooltip from "@mui/material/Tooltip";
// import { Link } from "react-router-dom";

// function List({ coin, disablePointer }) {
//   return (
//     <Link to={`/coin/${coin.id}`}>
//       <tr className={`list-row ${disablePointer ? "no-pointer" : ""}`}>
//         <td className="td-logo">
//           <Tooltip title={coin.name}>
//             <img src={coin.image} alt={coin.name} className="coin-logo" />
//           </Tooltip>
//         </td>
//         <td>
//           <div className="coin-info">
//             <Tooltip title={coin.name}>
//               <p className="coin-symbol">{coin.symbol}-USD</p>
//             </Tooltip>
//             <Tooltip title={coin.name}>
//               <p className="coin-name">{coin.name}</p>
//             </Tooltip>
//           </div>
//         </td>

//         {coin.price_change_percentage_24h > 0 ? (
//           <td className="chip-flex">
//             <Tooltip title="24h Price Change">
//               <div className="price-chip">
//                 {coin.price_change_percentage_24h !== null &&
//                 coin.price_change_percentage_24h !== undefined
//                   ? `${coin.price_change_percentage_24h.toFixed(2)} %`
//                   : "N/A"}
//               </div>
//             </Tooltip>
//             <Tooltip title="Trending Up">
//               <div className="icon-chip td-icon">
//                 <TrendingUpRoundedIcon />
//               </div>
//             </Tooltip>
//           </td>
//         ) : (
//           <td className="chip-flex">
//             <Tooltip title="24h Price Change">
//               <div className="price-chip chip-red td-icon">
//                 {coin.price_change_percentage_24h !== null &&
//                 coin.price_change_percentage_24h !== undefined
//                   ? `${coin.price_change_percentage_24h.toFixed(2)} %`
//                   : "N/A"}{" "}
//               </div>
//             </Tooltip>
//             <Tooltip title="Trending Down">
//               <div className="icon-chip chip-red td-icon">
//                 <TrendingDownRoundedIcon />
//               </div>
//             </Tooltip>
//           </td>
//         )}

//         <td>
//           <Tooltip title="Current Price">
//             <h3
//               className="coin-price td-left-align"
//               style={{
//                 color:
//                   coin.price_change_percentage_24h > 0
//                     ? "var(--green)"
//                     : "var(--red)",
//               }}
//             >
//               ${coin.current_price.toLocaleString()}
//             </h3>
//           </Tooltip>
//         </td>

//         <td>
//           <Tooltip title="Total Volume">
//             <p className="coin-volume td-right-align">
//               $ {coin.total_volume.toLocaleString()}
//             </p>
//           </Tooltip>
//         </td>

//         <td>
//           <Tooltip title="Market Cap">
//             <p className="coin-market-cap td-right-align">
//               $ {coin.market_cap.toLocaleString()}
//             </p>
//           </Tooltip>
//         </td>
//       </tr>
//     </Link>
//   );
// }

// export default List;
import React, { useEffect, useState } from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { convertNumber } from "../../../functions/convertNumber";

function List({ coin, disablePointer }) {
  // Responsive state to detect mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobile layout
  if (isMobile) {
    const isPositive = coin.price_change_percentage_24h > 0;

    return (
      <Link to={`/coin/${coin.id}`} className={`mobile-coin-card ${disablePointer ? "no-pointer" : ""}`}>
        <div className="mobile-card-top">
          <img src={coin.image} alt={coin.name} className="coin-logo" />

          <div className="mobile-coin-meta">
            <div className="mobile-coin-title">
              <span className="coin-symbol">{coin.symbol.toUpperCase()}-USD</span>
            </div>
            <div className="mobile-coin-sub">{coin.name}</div>
          </div>

          <div className="mobile-change-icon">
            {isPositive ? <TrendingUpRoundedIcon style={{ color: "var(--green)" }} /> : <TrendingDownRoundedIcon style={{ color: "var(--red)" }} />}
          </div>
        </div>

        <div className="mobile-card-middle">
          <div className={`mobile-price-change ${isPositive ? "green" : "red"}`}>
            {coin.price_change_percentage_24h != null
              ? `${coin.price_change_percentage_24h.toFixed(2)}%`
              : "N/A"}
          </div>

          <div className="mobile-price">
            ${coin.current_price != null ? convertNumber(coin.current_price) : "N/A"}
          </div>
        </div>

        <div className="mobile-card-bottom">
          <div className="mobile-stat">
            <small>Volume</small>
            <div>${coin.total_volume != null ? convertNumber(coin.total_volume) : "N/A"}</div>
          </div>
          <div className="mobile-stat">
            <small>Mkt Cap</small>
            <div>${coin.market_cap != null ? convertNumber(coin.market_cap) : "N/A"}</div>
          </div>
        </div>
      </Link>
    );
  }

  // Desktop layout (table) — unchanged
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className={`list-row ${disablePointer ? "no-pointer" : ""}`}>
        <td className="td-logo">
          <Tooltip title={coin.name}>
            <img src={coin.image} alt={coin.name} className="coin-logo" />
          </Tooltip>
        </td>
        <td>
          <div className="coin-info">
            <Tooltip title={coin.name}>
              <p className="coin-symbol">{coin.symbol}-USD</p>
            </Tooltip>
            <Tooltip title={coin.name}>
              <p className="coin-name">{coin.name}</p>
            </Tooltip>
          </div>
        </td>

        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <Tooltip title="24h Price Change">
              <div className="price-chip">
                {coin.price_change_percentage_24h != null
                  ? `${coin.price_change_percentage_24h.toFixed(2)} %`
                  : "N/A"}
              </div>
            </Tooltip>
            <Tooltip title="Trending Up">
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </Tooltip>
          </td>
        ) : (
          <td className="chip-flex">
            <Tooltip title="24h Price Change">
              <div className="price-chip chip-red td-icon">
                {coin.price_change_percentage_24h != null
                  ? `${coin.price_change_percentage_24h.toFixed(2)} %`
                  : "N/A"}
              </div>
            </Tooltip>
            <Tooltip title="Trending Down">
              <div className="icon-chip chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </Tooltip>
          </td>
        )}

        <td>
          <Tooltip title="Current Price">
            <h3
              className="coin-price td-left-align"
              style={{
                color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)",
              }}
            >
              ${coin.current_price != null ? coin.current_price.toLocaleString() : "N/A"}
            </h3>
          </Tooltip>
        </td>

        <td>
          <Tooltip title="Total Volume">
            <p className="coin-volume td-right-align">
              ${coin.total_volume != null ? coin.total_volume.toLocaleString() : "N/A"}
            </p>
          </Tooltip>
        </td>

        <td>
          <Tooltip title="Market Cap">
            <p className="coin-market-cap td-right-align">
              ${coin.market_cap != null ? coin.market_cap.toLocaleString() : "N/A"}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
}

export default List;


