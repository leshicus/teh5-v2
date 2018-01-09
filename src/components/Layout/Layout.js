import React from "react"
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"

const Layout = props => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch"
    }}
  >
    <Header />
    <div
      style={{ /* marginRight: "25px", */ height: "100%", overflow: "auto" }}
    >
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
