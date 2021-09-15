import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from "./nav_bar/nav_bar_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash_page/splash_page';
import ServerIndexContainer from './server/server_index_container';


const App = () => {
    
    return(

        <div>
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Switch>

                <ProtectedRoute exact path="/channel/:serverId/:channelId" component={ServerIndexContainer}/>
                <ProtectedRoute exact path="/channel/:serverId" component={ServerIndexContainer}/>
                <ProtectedRoute exact path="/channel/@me" component={ServerIndexContainer}/>

            </Switch>

        </div>
    )
}

export default App;