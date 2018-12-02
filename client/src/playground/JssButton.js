import * as React from 'react'
import injectSheet, { ThemeProvider } from 'react-jss'

const stylesJss = theme => ({
  button: {
    padding: '5px',
    background: theme.background,
    color: theme.color,
    alignSelf: 'start',
  },
})

const themes = {
  green: {
    background: 'green',
    color: 'white',
  },
  white: {
    background: 'white',
    color: 'black',
  },
}

const Button = ({ classes }) => (
  <button className={classes.button}>Button</button>
)
const StyledButton = injectSheet(stylesJss)(Button)

export class JssButton extends React.Component {
  state = {
    theme: themes.green,
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledButton />
      </ThemeProvider>
    )
  }
}
