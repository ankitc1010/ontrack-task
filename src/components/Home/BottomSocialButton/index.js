import React, { Component } from "react"
import FaCart from "react-icons/lib/fa/share-alt"
import FaCross from "react-icons/lib/fa/times-circle-o"
import FaFacebook from "react-icons/lib/fa/facebook"
import FaGoogle from "react-icons/lib/fa/google-plus"
import FaTwitter from "react-icons/lib/fa/twitter"

import "./styles.scss"
class HoverButton extends Component {
  state = {
    click: false
  }
  showSideNav = () => {
    document.querySelector(".sideNav").classList.add("sideNavVisibleRight")
  }
  hideSideNav = () => {
    document.querySelector(".sideNav").classList.remove("sideNavVisibleRight")
  }
  onClick = () => {
    // if (!this.state.click) {
    //   this.showSideNav()
    // } else {
    //   this.hideSideNav()
    // }
    // this.setState(({ click }) => {
    //   return { click: !click }
    // })
  }
  render() {
    return (
      <div className="hover__button__right__bottom__container">
        <button
          onClick={this.onClick}
          style={{
            background: this.state.click ? "black" : "white",
            color: this.state.click ? "white" : "black"
          }}
        >
          {this.state.click ? <FaCross size={26} /> : <FaCart size={26} />}
        </button>
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
    )
  }
}

export default HoverButton
