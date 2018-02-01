import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"
import Devider from "./../Devider"

/**
 * Footer of the site
 */
const Footer = () => (
  <div
    style={{
      display: "flex",
      height: "40px",
      background: "rgb(244, 244, 244)",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center"
    }}
  >
    <Link href="https://github.com/leshicus/teh5-v2">GitHub</Link>
    <Devider />
    <Link href="http://teh5.ru/new">teh5.ru</Link>
  </div>
)

export default Footer
