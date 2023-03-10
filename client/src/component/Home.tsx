import React, { useState } from "react";
import Typed from "react-typed";
import axios from "axios";
import { NavLink } from "react-router-dom";
import imgBackground from "../image/1001504.jpg";
import logoAED from "../image/logo.svg";
import logoBtc from "../image/btc.svg";
import logoCad from "../image/cad.svg";
import logoGBP from "../image/gbp.svg";
import logoBRL from "../image/ICON_BRL.svg";
import logoJPY from "../image/jpy.svg";
import imgProduct from "../image/1303503.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faDiscord,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
// import wave from "../image/wave.svg";
const Home = (props) => {
  const [data, setData]: any = useState("");

  const options = {
    method: "GET",
    url: "https://stock-and-options-trading-data-provider.p.rapidapi.com/options/aapl",
    headers: {
      "X-RapidAPI-Proxy-Secret": "a755b180-f5a9-11e9-9f69-7bf51e845926",
      "X-RapidAPI-Key": "e2431222acmsh036385c61a85767p13ba34jsn1b5ed45ec247",
      "X-RapidAPI-Host":
        "stock-and-options-trading-data-provider.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
      {/* // container for home page */}
      <div className="container home-page">
        <img src={imgBackground} className="d-block  img-background" alt="" />

        {/* for chart forex with price and async per min */}
        <div className={`container-usd animate__animated animate__bounceInUp`}>
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
          <h3 className="animate-charcter"> Bundle</h3>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={imgProduct} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={imgProduct} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imgProduct} className="d-block w-100" alt="..." />
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
      <div className="footer">
        <div className="about ">
          <h1 className=" animate__animated animate__pulse animate__infinite">
            About
          </h1>

          <Typed
            className="typing"
            strings={[
              "We are some trader4s put a major effort in studying every static and variable in different markets。You should be aware that the traders are 2 types, an ordinary trader which controls about 4% of the market and the whale which controls over 96% of the market although the number of whales are nothing compared to ordinary traders。Together we will join whales 。We are not beginners not cheaters We create the future We are whales of trade",
            ]}
            typeSpeed={7}
          />
        </div>

        <div className="contact">
          <h1 className=" animate__animated animate__pulse animate__infinite">
            Contact
          </h1>
          <div className="icon">
            <NavLink to="/">
              <FontAwesomeIcon icon={faTelegram} />
              Telegram
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faDiscord} />
              Discord
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faWhatsapp} />
              Whatsapp
            </NavLink>
            <NavLink to="/">
              <FontAwesomeIcon icon={faTiktok} />
              Tiktok
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
