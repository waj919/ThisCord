import React from 'react';
import ReactDOM from 'react-dom'
import Root from "./components/root"
import configureStore from "./store/store"
import {fetchMessage, fetchMessages, createMessage } from "./util/message_util"
import { fetchServerChannels} from "./util/channel_util"

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
    window.fetchServerChannels = fetchServerChannels
    window.fetchMessage = fetchMessage
    window.fetchMessages = fetchMessages
    window.createMessage = createMessage
    window.dispatch = store.dispatch
    window.getState = store.getState
    ReactDOM.render(<Root store={store} />, root )


})