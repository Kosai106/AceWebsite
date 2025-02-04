import React from "react"
import "../../styles/css/header.css"
import logoWhite from "../../images/supremeletters.png"
import ham from "../../images/hamburger.png"

const Header = props => {
  return (
    <div className="header-common-wrapper">
      <img id="ace-logo-header" src={logoWhite} />

      <img
        id="hamburger-item-header"
        src={ham}
        alt=""
        onClick={props.drawerSwitch}
      />
    </div>
  )
}

export { Header }
