//@flow
import * as React from 'react'
//$FlowIgnore
import injectSheet, { ThemeProvider } from 'react-jss'

const stylesJss = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  button: {
    padding: '5px',
    background: theme.background,
    color: theme.color,
    alignSelf: 'start',
  },
  select: {
    alignSelf: 'start',
  },
  block: {
    padding: '10px 0',
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
  black: {
    background: 'black',
    color: 'white',
  },
}

const Button = ({ classes }) => (
  <button className={classes.button}>Button</button>
)
const StyledButton = injectSheet(stylesJss)(Button)

const Root = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
)
const StyledRoot = injectSheet(stylesJss)(Root)

const SelectThemes = ({ classes, themes, handleClick }) => (
  <select
    className={classes.select}
    onChange={event => handleClick(themes[event.target.value])}
  >
    {Object.keys(themes).map((themeName, key) => (
      <option key={key}>{themeName}</option>
    ))}
  </select>
)
const StyledSelectThemes = injectSheet(stylesJss)(SelectThemes)

const Block = ({ classes, children }) => (
  <div className={classes.block}>{children}</div>
)
const StyledBlock = injectSheet(stylesJss)(Block)

export class JssThemeViewer extends React.Component<{}, { theme: {} }> {
  state = {
    theme: themes.green,
  }

  handleClick = (theme: {}) => {
    this.setState({
      theme: theme,
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledRoot>
          <StyledBlock>Themes viewer with JSS</StyledBlock>
          <StyledBlock>
            <StyledSelectThemes
              themes={themes}
              handleClick={this.handleClick}
            />
          </StyledBlock>
          <StyledBlock>
            <StyledButton />
          </StyledBlock>
        </StyledRoot>
      </ThemeProvider>
    )
  }
}
