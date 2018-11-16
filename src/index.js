import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { initializeIcons } from '@uifabric/icons/lib'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

// Router
import createHashHistory from 'history/createHashHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route /* , Redirect */ } from 'react-router-dom'

// Store
import { Provider } from 'react-redux'
import configStore from './util/configStore'

// View
import Layout from './components/Layout/Layout'
import DocContainer from './pages/Docs'
import JSMainContainer from './pages/JavaScript'
import CssMainContainer from './pages/Css'
import BrowserMainContainer from './pages/Browser'
import QA from './pages/QA'
import { Playground } from './Playground'

initializeIcons(/* optional base url */)

const history = createHashHistory()
// history.replace("/") // clears url after page reload
const store = configStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fabric style={{ height: '100%' }}>
        <Layout>
          <Route path="/jsdocs" component={DocContainer} />
          <Route path="/javascript" component={JSMainContainer} />
          <Route path="/css" component={CssMainContainer} />
          <Route path="/browser" component={BrowserMainContainer} />
          <Route path="/qa" component={QA} />
          <Route path="/playground" component={Playground} />
        </Layout>
      </Fabric>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// * HMR
if (module.hot) {
  module.hot.accept()
}
