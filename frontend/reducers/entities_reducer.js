import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import serverReducer from "./servers_reducer";
import channelReducer from "./channels_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  server: serverReducer,
  channel: channelReducer
});

export default entitiesReducer;