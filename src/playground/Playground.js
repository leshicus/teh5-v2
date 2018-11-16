//@flow
import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { ListItem } from '../components/ListItem'
import { First } from './First'
import MainContainer from './../components/MainContainer/MainContainer'

const styles = {
  root: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
}

type Props = { location: { pathname: string } }
type State = { isListOpen: boolean }

export class Playground extends React.Component<Props, State> {
  state = {
    isListOpen: true,
  }

  componentDidUpdate(props: Props, state: State) {
    const { location: { pathname: oldPathname } } = props
    const { location: { pathname: newPathname } } = this.props

    if (oldPathname !== newPathname && !state.isListOpen) {
      this.setState(state => ({
        isListOpen: true,
      }))
    }
  }

  toggleClick = () => {
    this.setState(state => ({
      isListOpen: !state.isListOpen,
    }))
  }

  render() {
    return (
      <div style={styles.root}>
        {this.state.isListOpen && (
          <React.Fragment>
            <ListItem to="/playground/first" onClick={this.toggleClick}>
              1
            </ListItem>
            <ListItem to="/playground/second" onClick={this.toggleClick}>
              2
            </ListItem>
          </React.Fragment>
        )}

        {!this.state.isListOpen && (
          <Switch>
            <Route path="/playground/first" component={First} />
            <Route path="/playground/second" component={First} />
          </Switch>
        )}
      </div>
    )
  }
}

// const routes = [
//   {
//     links: [
//       {
//         name: 'Playground',
//         url: '/playground',
//         links: [
//           {
//             name: 'first',
//             url: '/first',
//             component: First,
//           },
//         ],
//         isExpanded: true,
//       },
//     ],
//   },
// ]

// /**
//  * Main container for Browser page
//  */
// export const Playground = () => <MainContainer routes={routes} />
