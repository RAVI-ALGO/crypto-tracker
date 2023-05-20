import React, { useEffect, useState } from "react";
import Hearder from "../components/Hearder";
import CurrencyTable from "../components/CurrencyTable";
import axios from "axios";

const TrendingPage = ()=>{
    const [cryptoTrending, setCryptoTrending] = useState('');

  async function fetchData() {
    await axios.get(' https://api.coinlore.net/api/tickers/',{ crossDomain: true })
      .then((res) => {
        if (res.status === 200) {
            setCryptoTrending(res.data.data);
          localStorage.setItem("cryptoTrendin", res.data.data);
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    
    fetchData();
console.log("effect");
  }, [])

    return(
        <div className= "main w-full h-full flex flex-col ">
        <div className="homepage w-screen h-screen bg-gray-900">
            <Hearder />
            <CurrencyTable pagename="Trending Cyptocurrencies" cryptoData = {cryptoTrending} />
        </div>
    </div>
    )
}

export default TrendingPage