import React from "react";

import { createPortal } from "react-dom";
import { useLocation, useParams } from "react-router-dom";
import cryptoPoster from "../assets/crypto-poster.png";
const CryptoDetail = () => {
  const location = useLocation();
  const params = useParams();
  const { coinId } = params;
  console.log(coinId);
  let filteredObject = "";
  if (location.state.page === "Home") {
    const cryptoData = JSON.parse(localStorage.getItem("cryptoData"));

    filteredObject = cryptoData.filter((obj) => {
      return obj.id === coinId;
    });
  }

  if (location.state.page === "Trending") {
    const trendingData = JSON.parse(localStorage.getItem("cryptoTrending"));
    filteredObject = trendingData.filter((obj) => {
      return obj.id === coinId;
    });
  }

  return createPortal(
    <div className=" fixed top-0 w-full h-full z-50 bg-gray-700 bg-opacity-80  first-letter:backdrop:blur flex items-center justify-center text-white">
      <div className="w-[40%] h-[60%] bg-gray-100 text-black relative">
        <div className="py-2 px-3 flex flex-row justify-between">
          <div className="flex">
            <h5 className=" text-black-500 text-2xl bold font-extrabold">
              {" "}
              {filteredObject[0].name}
            </h5>
            <span className="bg-green-500 pt-1 px-1 ml-3 leading-normal text-gray-100 rounded">
              {filteredObject[0].symbol}
            </span>
          </div>
          <button
            className=" reltive left-10 px-3 "
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="red"
              className="bi bi-x-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className="px-3 py-2  flex flex-row justify-between">
          <div>
            <h4 className="text-gray-500 text-lg bold font-bold ">Price</h4>
            <h5 className="">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "usd",
              }).format(filteredObject[0].price_usd)}
            </h5>
          </div>
          <div>
            <h4
              className={
                filteredObject[0].percent_change_1h > 0
                  ? "bg-green-500 text-gray-100 px-2"
                  : "bg-red-500 text-gray-100 px-2"
              }
            >
              {Number(filteredObject[0].percent_change_1h).toFixed(2)} %
            </h4>
          </div>
        </div>
        <div className="px-3 py-2 flex flex-row">
          <div className="w-[30%]">
            <h4 className="text-gray-500 text-lg bold font-bold ">
              Market cap
            </h4>
            <h5 className="">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "usd",
              }).format(filteredObject[0].market_cap_usd)}
            </h5>
            <h4 className="text-gray-500 mt-3 text-lg bold font-bold ">
              Total Volume
            </h4>
            <h5 className="">{filteredObject[0].tsupply}</h5>
          </div>
          <div className="w-[70%] h-40">
          <img className="h-40 w-full object-cover"  src={cryptoPoster} />
          </div>
        </div>

        <div className="py-2 px-3 flex flex-row justify-between">
          <div className="flex flex-col">
            <h4 className="text-gray-500 text-lg bold font-bold ">1H</h4>
            <h5
              className={
                filteredObject[0].percent_change_1h > 0
                  ? "text-green-500"
                  : "text-red-500 "
              }
            >
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "usd",
              }).format(filteredObject[0].percent_change_1h)}
            </h5>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-500 text-lg bold font-bold ">24H</h4>
            <h5
              className={
                filteredObject[0].percent_change_24h > 0
                  ? "text-green-500"
                  : "text-red-500 "
              }
            >
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "usd",
              }).format(filteredObject[0].percent_change_24h)}
            </h5>
          </div>
          <div className="flex flex-col pr-2">
            <h4 className="text-gray-500 text-lg bold font-bold  block">7D</h4>
            <h5
              className={
                filteredObject[0].percent_change_7d > 0
                  ? "text-green-500 pr-2"
                  : "text-red-500 pr-2"
              }
            >
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "usd",
              }).format(filteredObject[0].percent_change_7d)}
            </h5>
          </div>
        </div>
        <div className="py-2 px-3 flex flex-row justify-between">
          <div className="flex flex-col">
            <h4 className="text-gray-500 text-lg bold font-bold ">
              Current Supply
            </h4>
            <h5 className="">{filteredObject[0].csupply}</h5>
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-500 text-lg bold font-bold ">
              Total Supply
            </h4>
            <h5 className="">{filteredObject[0].tsupply}</h5>
          </div>
          <div className="flex flex-col pr-2">
            <h4 className="text-gray-500 text-lg bold font-bold ">
              Max Supply
            </h4>
            <h5 className="">{filteredObject[0].msupply}</h5>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default CryptoDetail;
