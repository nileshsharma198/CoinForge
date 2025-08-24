import React, { useState } from "react";
import "./CoinInfo.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 400) + "<p style='color: var(--orange); display:inline'> ...Read More.</p>";

  const longDesc = 
    desc + "<p style='color: var(--orange); display:inline'> ...Read Less.</p>";

  const [flag, setFlag] = useState(false);

  return (
    <div className="grey-wrapper">
      <h1 className="coin-info-heading">{heading}</h1>
      {desc.length > 400 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{
            __html: !flag ? shortDesc : longDesc,
          }}
        />
      ) : (
        <p
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />
      )}
    </div>
  );
}

export default CoinInfo;
