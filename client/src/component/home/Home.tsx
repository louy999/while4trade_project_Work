import React from "react";
import Typed from "react-typed";
import axios from "axios";
import "./home.css";
import { NavLink } from "react-router-dom";
import imgBackground from "../../image/1001504.jpg";
import logoAED from "../../image/logo.svg";
import logoBtc from "../../image/btc.svg";
import logoCad from "../../image/cad.svg";
import logoGBP from "../../image/gbp.svg";
import logoBRL from "../../image/ICON_BRL.svg";
import logoJPY from "../../image/jpy.svg";
import imgProduct from "../../image/1303503.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faDiscord,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
const Home = (props) => {
  // const [data, setData]: any = useState("");

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
      <div className="img">
        <img src={imgBackground} className="d-block  img-background" alt="" />
      </div>
      <div className="container home-page">
        {/* for chart forex with price and async per min */}
        <div className={`container-usd animate__animated animate__bounceInUp`}>
          <div>
            <img src={logoBtc} alt="" />
            <span className="name-usd">USD/BTC :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/XAU :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/EUR :</span>
            <span className="number-used">k</span>
          </div>

          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/AED :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoBRL} alt="" />
            <span className="name-usd">USD/BRL :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoCad} alt="" />
            <span className="name-usd">USD/CAD :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoGBP} alt="" />
            <span className="name-usd">USD/GBP :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoJPY} alt="" />
            <span className="name-usd">USD/JPY :</span>
            <span className="number-used">k</span>
          </div>

          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/XAG :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/QAR :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/KWD :</span>
            <span className="number-used">k</span>
          </div>
          <div>
            <img src={logoAED} alt="" />
            <span className="name-usd">USD/CHF :</span>
            <span className="number-used">k</span>
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
              "We are a group of traders, we have spent a few years in the financial markets and we studied every static and variable in the economy of the world's whales of individuals and countries . We inform you that 96% of the financial markets are owned by a number of individuals that don't exceed the fingers of one hand. We called them whales, and the remaining 4% of the market is owned by the general public . We promise you that together we will be part of a bigger entity, we will make a boom in this world, we will become whales.. We are not scammers, we are not beginners, we are the creators of the future We are 'WHALE 4 TRADE' ",
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
