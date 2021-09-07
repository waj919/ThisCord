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
        // this.props.history.push('/')
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
            <div>
                <br />
                <header>
                    Create an Account
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
                    <label>Username:
                        <input 
                            type="text"  
                            value={this.state.username}
                            onChange={this.input('username')}
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
                    <input type="submit" value="Continue" />
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        )
    }
}

export default SignupForm