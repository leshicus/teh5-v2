import React from "react"
import { Label } from "office-ui-fabric-react/lib/Label"
import { Link } from "office-ui-fabric-react/lib/Link"
import Devider from "./../Devider"

const Footer = props => (
  <div
    style={{
      display: "flex",
      height: "40px",
      background: "rgb(244, 244, 244)",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center"
    }}
    /* className="ms-font-m" */
  >
    <Link href="https://github.com/leshicus/teh5-v2">GitHub</Link>
    <Devider />
    <Label>teh5.ru/new</Label>
  </div>
)

export default Footer
