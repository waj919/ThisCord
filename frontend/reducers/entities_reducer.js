import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import serverReducer from "./servers_reducer";
import channelReducer from "./channels_reducer";
import messageReducer from "./messages_reducer";
import dmChannelReducer from "./dm_channels_reducer";
import dmMessageReducer from "./dm_messages_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  server: serverReducer,
  channel: channelReducer,
  message: messageReducer,
  dmChannels: dmChannelReducer,
  dmMessages: dmMessageReducer
});

export default entitiesReducer;