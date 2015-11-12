/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import createStore from './store/create';
import ApiClient from './helpers/ApiClient';
//import io from 'socket.io-client';
import {Provider} from 'react-redux';
import {reduxReactRouter} from 'redux-router';

import getRoutes from './routes';
import makeRouteHooksSafe from './helpers/makeRouteHooksSafe';

const client = new ApiClient();

const dest = document.getElementById('content');
const store = createStore(reduxReactRouter, makeRouteHooksSafe(getRoutes), createHistory, client, window.__data);

import Root from './Root';


//FIXME: Do not use Node.js server now
//function initSocket() {
//  const socket = io('', {path: '/api/ws', transports: ['polling']});
//  socket.on('news', (data) => {
//    console.log(data);
//    socket.emit('my other event', { my: 'data from client' });
//  });
//  socket.on('msg', (data) => {
//    console.log(data);
//  });
//
//  return socket;
//}
//
//global.socket = initSocket();

ReactDOM.render(
  <Provider store={store} key="provider">
    <Root/>
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}