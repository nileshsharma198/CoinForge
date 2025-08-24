import React from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function List({ coin, disablePointer }) {
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
                {coin.price_change_percentage_24h !== null &&
                coin.price_change_percentage_24h !== undefined
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
                {coin.price_change_percentage_24h !== null &&
                coin.price_change_percentage_24h !== undefined
                  ? `${coin.price_change_percentage_24h.toFixed(2)} %`
                  : "N/A"}{" "}
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
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </Tooltip>
        </td>

        <td>
          <Tooltip title="Total Volume">
            <p className="coin-volume td-right-align">
              $ {coin.total_volume.toLocaleString()}
            </p>
          </Tooltip>
        </td>

        <td>
          <Tooltip title="Market Cap">
            <p className="coin-market-cap td-right-align">
              $ {coin.market_cap.toLocaleString()}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
}

export default List;
