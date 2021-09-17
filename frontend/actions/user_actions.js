import * as userUtil from "../util/user_util"

export const RECEIVE_USERS = "RECEIVE_USERS"

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const fetchAllUsers = () => dispatch => {
    return userUtil.fetchAllUsers()
    .then( users => dispatch(receiveUsers(users)))
}