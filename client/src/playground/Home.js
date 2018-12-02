//@flow
import * as React from 'react'
import { ListItem } from '../components/ListItem'

export const Home = () => (
  <React.Fragment>
    <ListItem to="/playground/jss">JSS Example</ListItem>
    <ListItem to="/playground/ramda">Ramda</ListItem>
  </React.Fragment>
)
