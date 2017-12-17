import React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Link } from "office-ui-fabric-react/lib/Link";
import Devider from "./../Devider";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

const Footer = props => (
    <Fabric
        style={{
            display: "flex",
            height: "40px",
            background: "rgb(244, 244, 244)",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center"
        }}
        className="ms-font-m"
    >
        <Link href="https://github.com/leshicus/">GitHub</Link>
        <Devider />
        <Label className="ms-font-mi">teh5.ru</Label>
    </Fabric>
);

export default Footer;
