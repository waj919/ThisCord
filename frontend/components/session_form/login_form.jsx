import React from 'react';
import {Link} from "react-router-dom"


class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign( {}, this.state)
        // this.props.history.push('/')
        this.props.login(user)
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
                <div className="form-modal">
                    <header className="welcome-message">
                        Welcome Back!
                    </header>
                    <p className="welcome-message-2"> We're so excited to see you again!</p>
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label className="email-label">EMAIL
                        <br />  
                            <input 
                                className="email-input"
                                type="text"  
                                value={this.state.email}
                                onChange={this.input('email')}
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
                        <input className="submit-button" type="submit" value="Login" />
                    </form>
                    <button id="demo-button" onClick={ () => this.props.login({email: "waj919@gmail.com", password: "123456"})}>DEMO USER</button>
                    <p className="account-message">Need an account? <Link className="link" to="/signup">Register</Link></p>
                </div>
            </div>
        )
    }
}

export default LoginForm