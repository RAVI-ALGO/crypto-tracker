import React, { useEffect, useState } from "react";
import Hearder from "../components/Hearder";

import CurrencyTable from "../components/CurrencyTable";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import CryptoDetail from "../components/cryptoDetails";

const Home = () =>{
    const [cryptoData, setCryptoData] = useState('');
    const navigate = useNavigate()

  async function fetchData() {
    await axios.get('  https://api.coinlore.net/api/tickers/?start=200&limit=100',{ crossDomain: true })
      .then((res) => {
        if (res.status === 200) {
          setCryptoData(res.data.data);
          localStorage.setItem("cryptoData", res.data.data);
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    
    fetchData();
  }, [])

    return(
        <div className= "main w-full h-full flex flex-col ">
            <div className="homepage w-screen h-screen bg-gray-900">
                <Hearder  />
                <CurrencyTable pagename="Cyptocurrencies Market" cryptoData={cryptoData} />
                <Routes>
                <Route exact path=':coinId' element={<CryptoDetail />} />
                </Routes>
            </div>
        </div>
    )
}

export default Home;