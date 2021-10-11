import React from 'react';
import {Link} from "react-router-dom"


class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            username: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
      this.props.clearErrors();
    }
    
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign( {}, this.state)
        this.props.signup(user)
    }
    
    input(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    
    }

    renderErrors() {
        return(
            <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                {error}
                </li>
            ))}
            </ul>
        );
        }

    render(){
        return(
            <div className="form">
                <div className="signup-modal form-modal">
                    <br />
                    <header className="welcome-message">
                        Create an Account
                    </header>
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label className="email-label">EMAIL
                            <input 
                                className="email-input"
                                type="email"  
                                required={true}
                                value={this.state.email}
                                onChange={this.input('email')}
                                />
                        </label>
                        <br />
                        <label className="user-label">USERNAME
                            <input 
                                className="user-input"
                                type="text"  
                                value={this.state.username}
                                onChange={this.input('username')}
                                />
                        </label>
                        <br />
                        <label className="pw-label"> PASSWORD
                            <input 
                                className="pw-input"
                                type="password"  
                                value={this.state.password}
                                onChange={this.input('password')}
                                />
                        </label>
                        <input className="submit-button" type="submit" value="Continue" />
                    </form>
                    <p className="login-message">
                        <Link className="link" to="/login">Already have an account?</Link>
                        </p>
                </div>
            </div>
        )
    }
}

export default SignupForm