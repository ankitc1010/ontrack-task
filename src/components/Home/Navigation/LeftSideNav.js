import React, { Component } from "react"
// import Guide from "./Guide"
class LeftSideNav extends Component {
  constructor(props) {
    super()
    this.state = {
      settings: true,
      view: "account",
      users: null,
      editType: "profile",
      edit: false,
      email: "",
      company_name: "",
      phone: "",
      name: "",
      password: ""
    }
  }
  render() {
    let { auth } = this.props
    let { settings } = this.state
    return (
      <div className="sideNavContainer" onClick={this.props.blockClicks}>
        <div>cool</div>
      </div>
    )
  }
}

export default LeftSideNav
