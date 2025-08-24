import React from 'react'
import './Grid.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Grid({ coin }) {
  return (
    // logo and name of coin
  <Link to = {`/coin/${coin.id}`}>
  <div className={`grid-container 
  ${coin.price_change_percentage_24h < 0 && 'grid-container-red'}`}
>
  <div className='info-flex'>
    <Tooltip title={coin.name}  placement = "bottom-start">
      <img src={coin.image} alt={coin.name} className='coin-logo' />
    </Tooltip>
    <div className='coin-info'>
      <Tooltip title={coin.name} placement = "bottom-start">
        <p className='coin-symbol'>{coin.symbol}-USD</p>
      </Tooltip>
      <Tooltip title={coin.name} placement = "bottom-start">
        <p className='coin-name'>{coin.name}</p>
      </Tooltip>
    </div>
  </div>

  {/* price change in 24Hours */}
  {coin.price_change_percentage_24h > 0 ? (
    <div className='chip-flex'>
      <Tooltip title="Price change (24h)" placement = "bottom-start">
        <div className='price-chip'>
          {/* {coin.price_change_percentage_24h.toFixed(2)} % */}
        {coin.price_change_percentage_24h !== null &&
              coin.price_change_percentage_24h !== undefined
              ? `${coin.price_change_percentage_24h.toFixed(2)} %`
              : "N/A"}
        </div>
      </Tooltip>
      <Tooltip title="Trending Up" placement = "bottom-start">
        <div className='icon-chip'>
          <TrendingUpRoundedIcon />
        </div>
      </Tooltip>
    </div>
  ) : (
    <div className='chip-flex'>
      <Tooltip title="Price change (24h)" placement = "bottom-start">
        <div className='price-chip chip-red'>
          {/* {coin.price_change_percentage_24h.toFixed(2)} % */}
          {coin.price_change_percentage_24h !== null &&
              coin.price_change_percentage_24h !== undefined
                ? `${coin.price_change_percentage_24h.toFixed(2)} %`
                : "N/A"}
        </div>
      </Tooltip>
      <Tooltip title="Trending Down" placement = "bottom-start">
        <div className='icon-chip chip-red'>
          <TrendingDownRoundedIcon />
        </div>
      </Tooltip>
    </div>
  )}

  {/* current price of coin */}
  <div className='info-container'>
    <Tooltip title="Current Price" placement = "bottom-start">
      <h3
        className='coin-price'
        style={{
          color:
          coin.price_change_percentage_24h > 0
          ? 'var(--green)'
          : 'var(--red)',
        }}
        >
        ${coin.current_price.toLocaleString()}
      </h3>
    </Tooltip>
  </div>

  {/* coin details */}
  <div className='coin-details'>
    <Tooltip title="24h Volume" placement = "bottom-start">
      <p className='coin-volume'>
        Volume: ${coin.total_volume.toLocaleString()}
      </p>
    </Tooltip>
    <Tooltip title="Market Cap" placement = "bottom-start">
      <p className='coin-market-cap'>
        Market Cap: ${coin.market_cap.toLocaleString()}
      </p>
    </Tooltip>
  </div>
</div>
</Link>
  );
}

export default Grid