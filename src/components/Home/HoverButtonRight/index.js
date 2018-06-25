import React, { Component } from "react"
import FaCart from "react-icons/lib/fa/shopping-cart"

import "./styles.scss"
class HoverButton extends Component {
  state = {
    hover: true
  }
  renderText = () => {
    let hover = this.state.hover
    console.log(hover)
    return
  }
  onHover = () => {
    this.setState({ hover: true })
  }
  onNotHover = () => {
    this.setState({
      hover: false
    })
  }
  render() {
    return (
      <div className="hover__button__right__container">
        <button>
          <FaCart size={26} />
        </button>
        <span>Cart</span>
      </div>
    )
  }
}

export default HoverButton
