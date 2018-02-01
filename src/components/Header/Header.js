import React from "react"

import { CommandBar } from "office-ui-fabric-react/lib/CommandBar"

import { getItems } from "./../../actions/getHeaderMenu"
import commandBarItems from "./routes"

const items = getItems(commandBarItems)

/**
 * Main header with navigation menu
 */
const Header = () => <CommandBar isSearchBoxVisible={false} items={items} />

export default Header
