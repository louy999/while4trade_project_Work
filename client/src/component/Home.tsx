import React, { useState } from "react";
import imgBackground from "../image/1001504.jpg";
import logoAED from "../image/logo.svg";
import logoBtc from "../image/btc.svg";
import logoCad from "../image/cad.svg";
import logoGBP from "../image/gbp.svg";
import logoBRL from "../image/ICON_BRL.svg";
import logoJPY from "../image/jpy.svg";
import imgProdcut from "../image/1303503.jpg";
import imgPro from "../image/412348.jpg";

const Home = (props) => {
  const [data, setData]: any = useState("");
  const myHeaders = new Headers();
  myHeaders.append("apikey", "HbYlObky87de9yOBMEXrZyuPjJbl0D0A");

  const requestOptions: any = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  fetch("https://api.apilayer.com/currency_data/live", requestOptions)
    .then((res) => res.json())
    .then((res: any) => {
      setData(res.quotes);
    });

  return (
    // container for home page
    <div className="container home-page">
      <img src={imgBackground} className="d-block  img-background" alt="" />
      {/* for chart forex with price and async per min */}
      <div className=" container-usd">
        <div>
          <img src={logoBtc} alt="" />
          <span className="name-usd">USD/BTC :</span>
          <span className="number-used">{data.USDBTC}</span>
        </div>
        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/XAU :</span>
          <span className="number-used">{data.USDXAU}</span>
        </div>
        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/EUR :</span>
          <span className="number-used">{data.USDEUR}</span>
        </div>

        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/AED :</span>
          <span className="number-used">{data.USDAED}</span>
        </div>
        <div>
          <img src={logoBRL} alt="" />
          <span className="name-usd">USD/BRL :</span>
          <span className="number-used">{data.USDBRL}</span>
        </div>
        <div>
          <img src={logoCad} alt="" />
          <span className="name-usd">USD/CAD :</span>
          <span className="number-used">{data.USDCAD}</span>
        </div>
        <div>
          <img src={logoGBP} alt="" />
          <span className="name-usd">USD/GBP :</span>
          <span className="number-used">{data.USDGBP}</span>
        </div>
        <div>
          <img src={logoJPY} alt="" />
          <span className="name-usd">USD/JPY :</span>
          <span className="number-used">{data.USDJPY}</span>
        </div>

        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/XAG :</span>
          <span className="number-used">{data.USDXAG}</span>
        </div>
        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/QAR :</span>
          <span className="number-used">{data.USDQAR}</span>
        </div>
        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/KWD :</span>
          <span className="number-used">{data.USDKWD}</span>
        </div>
        <div>
          <img src={logoAED} alt="" />
          <span className="name-usd">USD/CHF :</span>
          <span className="number-used">{data.USDCHF}</span>
        </div>
      </div>
      {/* for slide img for product  */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={imgProdcut} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={imgBackground} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgPro} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
