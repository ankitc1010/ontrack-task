import React, { Component } from "react"
import "./styles.scss"

class BuyProductButton extends Component {
  render() {
    return (
      <button
        className="outer__span__button"
        style={{ background: `${this.props.color}` }}
      >
        <span className="span__text">{this.props.children}</span>
      </button>
    )
  }
}

export default BuyProductButton
