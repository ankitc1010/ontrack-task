import React, { Component } from "react"
import { Link } from "react-router-dom"
import FaFacebook from "react-icons/lib/fa/facebook"
import FaGoogle from "react-icons/lib/fa/google-plus"
import FaTwitter from "react-icons/lib/fa/twitter"
import SideNav from "./Navigation/SideNav"
import HeaderText from "./HeaderText"
import HoverButton from "./HoverButton"
import HoverButtonRight from "./HoverButtonRight"
import BuyProductButton from "./BuyProductButton"
import BottomSocialButton from "./BottomSocialButton"
import chairImg from "./img/chair.jpg"
import cool from "./img/cool.jpg"
import h2 from "./img/h2.jpg"
import h3 from "./img/h3.jpg"
import h4 from "./img/h4.jpg"
import h5 from "./img/h5.jpg"
import h6 from "./img/h6.jpg"
import grid1 from "./img/grid1.jpg"
import grid2 from "./img/grid3.jpg"
import grid3 from "./img/grid2.jpg"
import grid4 from "./img/grid4.jpg"

import FaSearch from "react-icons/lib/fa/search"

import chair3 from "./img/chair3.png"

import "./styles.scss"
class Home extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <BottomSocialButton />
        <div className="top-section">
          <HeaderText />
          <div>
            <div className="sticky__nav">
              <div className="padding">
                <HoverButton />
              </div>
              <div className="padding">
                <HoverButtonRight />
              </div>
            </div>
            <div>
              <div className="layout__chair">
                <div className="layout__chair__content">
                  <h2>01 — Chair</h2>
                  A fresh, modern take on the traditional captain chair, Kaptain
                  is a versatile piece suited to both living and dining spaces.
                  Durable and easy to maintain, with a molded plastic seat and
                  solid beech wood legs, Kaptain will see you through the years.
                  Kaptain comes in a range of colours suited to any home.<br />
                  <br />
                  <div className="chair__cost__currency">
                    <span className="chair__cost">160</span> CAD
                  </div>
                  <BuyProductButton>Buy this product</BuyProductButton>
                </div>
                <div className="layout__chair__img">
                  <img src={chairImg} />
                </div>
              </div>
            </div>
            <div className="layout__relative">
              <div className="css__grid">
                <div
                  className="big boogey"
                  style={{
                    background: `url(${cool}) 44% 51%`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="overlay__screen">
                    <span>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div
                  className="small1 boogey"
                  style={{
                    background: `url(${h2}) 44% 51%`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="overlay__screen">
                    <span>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div
                  className="small2 boogey"
                  style={{
                    background: `url(${h3}) 44% 51%`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="overlay__screen">
                    <span>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div
                  className="big2 boogey"
                  style={{
                    background: `url(${h4}) 44% 51%`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="overlay__screen">
                    <span>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div
                  className="big3 boogey"
                  style={{
                    background: `url(${h5}) 44% 51%`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="overlay__screen">
                    <span>
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div
                  className="small3 boogey"
                  style={{
                    background: `url(${h6}) 44% 51%`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="overlay__screen">
                    <span>
                      <FaSearch />
                    </span>
                  </div>
                </div>

                <div className="follow">
                  <BuyProductButton color="#be2b27">
                    Follow on Pinterest
                  </BuyProductButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chair__details__section">
          <div className="chair__details__image">
            <img src={chair3} />
          </div>
          <div className="chair__details__content">
            <h2>03 — Chair</h2>
            <table>
              <tbody>
                <tr>
                  <th>Size</th>
                  <td>22 x 22 x 29 in. (56 x 56 x 74 cm.)</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>22 x 22 x 29 in. (56 x 56 x 74 cm.)</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            160 cad<br />
            <br />
            <BuyProductButton>Buy this product</BuyProductButton>
          </div>
        </div>
        <div className="three__boxes__grid">
          <div
            className="first"
            style={{
              background: `url(${grid1}) 44% 51%`,
              backgroundSize: "cover"
            }}
          >
            <div className="item__overlay" style={{ background: "#344274" }}>
              <h3>Orbit</h3>
              <p>150 cad</p>
            </div>
          </div>
          <div
            className="first"
            style={{
              background: `url(${grid2}) 44% 51%`,
              backgroundSize: "cover"
            }}
          >
            <div className="item__overlay" style={{ background: "#e8e1d4" }}>
              <h3>Rolo</h3>
              <p>150 cad</p>
            </div>
          </div>
          <div
            className="first"
            style={{
              background: `url(${grid3}) 44% 51%`,
              backgroundSize: "cover"
            }}
          >
            <div className="item__overlay" style={{ background: "#9a9695" }}>
              <h3>Versa</h3>
              <p>150 cad</p>
            </div>
          </div>
          <div
            className="first"
            style={{
              background: `url(${grid4}) 44% 51%`,
              backgroundSize: "cover"
            }}
          >
            <div className="item__overlay" style={{ background: "#bfced7" }}>
              <h3>Boto</h3>
              <p>150 cad</p>
            </div>
          </div>
        </div>
        <div className="back-portion">
          <p>Back to Kvell products</p>
        </div>
        <div className="social-portion">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaGoogle />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
        <div className="contact-portion">
          <span>The FHE Group Inc</span>
          <span>Terms and Conditions</span>
          <span>Why Locomotive?</span>
        </div>
      </div>
    )
  }
}

export default Home
