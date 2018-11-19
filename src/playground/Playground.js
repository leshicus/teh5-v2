//@flow
import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import Loadable from 'react-loadable'

const getLoadableComponent = (name: string) => {
  const Comp = Loadable({
    loader: () => import(`./${name}`),
    loading() {
      return <div>Loading...</div>
    },
  })

  return <Comp />
}

const styles = {
  root: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
}

export class Playground extends React.Component<{}> {
  componentDidCatch(error, info) {
    console.log(error, info)
  }
  render() {
    return (
      <div style={styles.root}>
        <Switch>
          {routes.map((route, key) => {
            return (
              <Route
                key={key}
                exact={!!route.exact}
                path={route.path}
                render={() => getLoadableComponent(route.component)}
              />
            )
          })}
        </Switch>
      </div>
    )
  }
}
