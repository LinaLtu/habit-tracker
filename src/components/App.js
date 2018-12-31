import { AppContainer } from 'react-hot-loader';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from '../configureStore';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>{routes}</ConnectedRouter>
        </Provider>
      </AppContainer>
    );
  }
}

export default App;
