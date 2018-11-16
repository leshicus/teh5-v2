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
  onClick,
}: {
  children: string,
  to: string,
  onClick: () => void,
}) => {
  return (
    <div style={styles.root} onClick={onClick}>
      <Link to={to}>{children}</Link>
    </div>
  )
}
