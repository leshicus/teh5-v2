//@flow
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { routes } from './routes'
// import { gatLoadablePlayground } from './PlaygroundLoader'
import { Home } from './Home'
import { Jss } from './Jss'
import { Ramda } from './Ramda'

const styles = {
  root: {
    height: '100%',
    margin: '0px 10px',
  },
}

export class Playground extends React.Component<{}> {
  componentDidCatch(error: any, info: any) {
    console.log(error, info)
  }
  componentDidMount() {
    fetch('api/hello').then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div style={styles.root}>
        <Switch>
          {/* {routes.map((route, key) => {
            return (
              //! when I load comp dynamically, doesn't work dynamic load in Example with data-src
              <Route
                key={key}
                exact={route.exact}
                path={`/${route.folder}/${route.path}`}
                render={() => gatLoadablePlayground(route.component)}
              />
              
            )
          })} */}

          <Route exact={true} path={'/playground'} component={Home} />
          <Route exact={true} path={'/playground/jss'} component={Jss} />
          <Route exact={true} path={'/playground/ramda'} component={Ramda} />
        </Switch>
      </div>
    )
  }
}
