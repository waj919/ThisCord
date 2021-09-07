import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, clearErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SignupForm)