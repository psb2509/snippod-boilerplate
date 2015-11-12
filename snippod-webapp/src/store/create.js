import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from '../middleware/clientMiddleware';
import transitionMiddleware from '../middleware/transitionMiddleware';

//TODO: Only works in client Mode. Prepare SSR.
import getBrowserLocale from '../helpers/getBrowserLocale.js';
const browserLocale = getBrowserLocale();

export default function createStore(reduxReactRouter, getRoutes, createHistory, client, data) {
  const middleware = [createMiddleware(client), transitionMiddleware];

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools/DevTools');
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  finalCreateStore = reduxReactRouter({ getRoutes, createHistory })(finalCreateStore);

  const reducer = require('ducks/reducer');
  // TODO: It's not good way. But I coudn't find another way to fix this locale value.
  if ( __CLIENT__ ) {
    data.auth.locale = browserLocale;
  }
  const store = finalCreateStore(reducer, data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('ducks/reducer', () => {
      store.replaceReducer(require('ducks/reducer'));
    });
  }

  return store;
}