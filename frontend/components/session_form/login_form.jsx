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
            <div id="login">
                <br />
                <header>
                    Welcome Back!
                    {this.renderErrors()}
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input 
                            type="text"  
                            value={this.state.email}
                            onChange={this.input('email')}
                            />
                    </label>
                    <br />
                    <label>Password:
                        <input 
                            type="password"  
                            value={this.state.password}
                            onChange={this.input('password')}
                            />
                    </label>
                    <input type="submit" value="Login" />
                </form>
                <p>Need an account? <Link to="/signup">Register</Link></p>
            </div>
        )
    }
}

export default LoginForm