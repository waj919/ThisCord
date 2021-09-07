import * as sessionsAPI from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'


const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => {
  return { 
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

 export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = user => dispatch => (
    sessionsAPI.login(user)
    .then( res => { console.log(res); return dispatch(receiveCurrentUser(res))},
    errors =>{return (dispatch(receiveErrors(errors.responseJSON)))})
);

export const logout = () => dispatch => (
    sessionsAPI.logout()
    .then( () => (dispatch(logoutCurrentUser())), 
    errors => (dispatch(receiveErrors(errors.responseJSON))))


);

export const signup = newUser => dispatch => (
    sessionsAPI.signup(newUser)
    .then( res => (dispatch(receiveCurrentUser(res))), 
    errors => (dispatch(receiveErrors(errors.responseJSON))))

);
