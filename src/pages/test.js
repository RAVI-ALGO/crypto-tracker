<div className="w-[40%] h-[40%] bg-gray-100 text-black relative">
        <div className="py-2 px-3 flex flex-row justify-between">
          <div className="flex">
            <h5 className=" text-black-500 text-2xl bold font-extrabold">
              {" "}
              {filteredObject[0].name}
            </h5>
            <span className="bg-green-700 pt-1 px-1 ml-3 leading-normal text-green-300 rounded">
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
              class="bi bi-x-square"
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
            <h4 className="text-black text-lg bold font-bold">change</h4>
          </div>
        </div>
        <div className="px-3 py-2">
          <h4 className="text-gray-500 text-lg bold font-bold ">Market cap</h4>
          <h5 className="">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "usd",
            }).format(filteredObject[0].market_cap_usd)}
          </h5>
        </div>
        <div className="px-3 py-2">
          <h4 className="text-gray-500 text-lg bold font-bold ">
            Total Volume
          </h4>
          <h5 className="">{filteredObject[0].tsupply}</h5>
        </div>
      </div> 