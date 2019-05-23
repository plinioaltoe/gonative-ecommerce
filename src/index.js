import '~/config/ReactotronConfig'
import '~/config/DevToolsConfig'
import React from 'react'
import { Provider } from 'react-redux'

import CodePush from 'react-native-code-push'

import store from '~/store'
import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App)
