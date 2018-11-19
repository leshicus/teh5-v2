//@flow
import * as React from 'react'
import { Link } from 'react-router-dom'
const styles = {
  root: {
    margin: '0 0 5px 0',
  },
}
export const ListItem = ({
  children,
  to,
}: {
  children: string,
  to: string,
}) => {
  return (
    <div style={styles.root}>
      <Link to={to}>{children}</Link>
    </div>
  )
}
