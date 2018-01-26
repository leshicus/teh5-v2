import React from "react"

const Title = props => <div>{props.title}</div>

export default props => {
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
