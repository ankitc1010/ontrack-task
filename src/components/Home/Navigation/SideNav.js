import React, { Component } from "react"
// import { connect } from 'react-redux'
import "./style.scss"
import LeftSideNav from "./LeftSideNav"
import RightSideNav from "./RightSideNav"

class SideNav extends Component {
  hideSideNav = () => {
    document.querySelector(".sideNav").classList.remove("sideNavVisible")
  }
  hideSideNavRight = () => {
    document.querySelector(".sideNav").classList.remove("sideNavVisibleRight")
  }
  blockClicks = evt => {
    evt.stopPropagation()
  }
  render() {
    var { auth } = this.props
    return (
      <div className="sideNav" onClick={this.hideSideNav}>
        <LeftSideNav
          auth={auth}
          hideSideNav={this.hideSideNav}
          blockClicks={this.blockClicks}
        />
        <RightSideNav
          auth={auth ? auth : {}}
          hideSideNavRight={this.hideSideNavRight}
          blockClicks={this.blockClicks}
        />
      </div>
    )
  }
}
export default SideNav
