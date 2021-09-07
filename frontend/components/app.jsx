import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from "./nav_bar/nav_bar_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash_page/splash_page';


const App = () => {
    
    return(

        <div>
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
}

export default App;