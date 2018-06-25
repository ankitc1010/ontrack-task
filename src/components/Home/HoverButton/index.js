import React, { Component } from "react"
import FaBars from "react-icons/lib/fa/bars"
import FaCross from "react-icons/lib/fa/times-circle-o"

import "./styles.scss"
class HoverButton extends Component {
  state = {
    click: false
  }
  showSideNav = () => {
    document.querySelector(".sideNav").classList.add("sideNavVisible")
  }
  hideSideNav = () => {
    document.querySelector(".sideNav").classList.remove("sideNavVisible")
  }
  hideSideNavRight = () => {
    document.querySelector(".sideNav").classList.remove("sideNavVisibleRight")
  }
  onHover = () => {
    console.log("cool", this.state)
    if (!this.state.click) {
      this.showSideNav()
    } else {
      this.hideSideNav()
    }
    this.setState(state => {
      return {
        click: !state.click
      }
    })
  }
  render() {
    return (
      <div className="hover__button__container">
        <button
          onClick={this.onHover}
          style={{
            background: this.state.click ? "black" : "white",
            color: this.state.click ? "white" : "black"
          }}
        >
          {this.state.click ? <FaCross size={30} /> : <FaBars size={30} />}
        </button>
        <span>Menu</span>
      </div>
    )
  }
}

export default HoverButton
