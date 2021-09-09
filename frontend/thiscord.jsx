import React from 'react';
import ReactDOM from 'react-dom'
import Root from "./components/root"
import configureStore from "./store/store"
import {login, signup} from "./actions/session_actions"
import {createServer, removeServer} from "./actions/server_actions"

document.addEventListener("DOMContentLoaded", () => {


    const root = document.getElementById('root')

    let preloadedState = undefined;
    if (window.currentUser) {
      preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: {
          currentUser: window.currentUser
        }
      }
    }
    const store = configureStore(preloadedState)
    window.createServer = createServer
    window.removeServer = removeServer
    window.dispatch = store.dispatch
    window.getState = store.getState
    ReactDOM.render(<Root store={store} />, root )
})