import React, { Component } from "react"
import "./styles.scss"

class HeaderText extends Component {
  componentDidMount() {
    window.onscroll = function() {
      var header = document.getElementById("kaptain")
      var sticky = header.clientHeight
      this.myFunction({ header, sticky })
    }.bind(this)
  }
  myFunction = ({ header, sticky }) => {
    header.style.top =
      window.pageYOffset > sticky * 0.5
        ? `${window.pageYOffset - sticky * 0.5}px`
        : "auto"
  }
  render() {
    return (
      <div>
        <h1 className="header__text__heading" id="kaptain">
          Kaptain
        </h1>
      </div>
    )
  }
}

export default HeaderText
