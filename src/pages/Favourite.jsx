import React from "react";
import Hearder from "../components/Hearder";
import CurrencyTable from "../components/CurrencyTable";

const Favourite = () =>{
    const savedCrypto = [
              {
              "id": "90",
              "symbol": "BTC",
              "name": "Bitcoin",
              "nameid": "bitcoin",
              "rank": 1,
              "price_usd": "6456.52",
              "percent_change_24h": "-1.47",
              "percent_change_1h": "0.05",
              "percent_change_7d": "-1.07",
              "price_btc": "1.00",
              "market_cap_usd": "111586042785.56",
              "volume24": 3997655362.9586277,
              "volume24a": 3657294860.710187,
              "csupply": "17282687.00",
              "tsupply": "17282687",
              "msupply": "21000000"
            },
    ]
    return(
<div className= "main w-full h-full flex flex-col ">
        <div className="homepage w-screen h-screen bg-gray-900">
            <Hearder />
            <CurrencyTable pagename="Favourite Cyptocurrencies" cryptoData = {savedCrypto} />
        </div>
    </div>
    )
}

export default Favourite