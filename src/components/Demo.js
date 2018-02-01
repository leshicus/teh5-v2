import React from "react"

const Title = props => <div>{props.title}</div>

/**
 * Component with the demo example inside it
 */
const Demo = props => {
  const styles = {
    main: {
      marginBottom: "10px",
      marginTop: "10px",
      width: props.width,
      height: props.height,
      border: "1px dashed black"
    }
  }

  return (
    <div style={styles.main}>
      {props.title && <Title />}
      {props.children}
    </div>
  )
}

export default Demo
