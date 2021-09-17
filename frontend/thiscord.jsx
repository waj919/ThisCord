import React from 'react';
import ReactDOM from 'react-dom'
import Root from "./components/root"
import configureStore from "./store/store"
import * as channelUtil from "./util/dm_channel_util"
import * as messageUtil from "./util/dm_message_util"

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
    window.channelUtil = channelUtil
    window.fetchDmMessages = messageUtil.fetchDmMessages
    window.createDmMessage = messageUtil.createDmMessage
    window.fetchDmChannels = channelUtil.fetchDmChannels
    window.createDmChannel = channelUtil.createDmChannel
    window.dispatch = store.dispatch
    window.getState = store.getState
    ReactDOM.render(<Root store={store} />, root )


})