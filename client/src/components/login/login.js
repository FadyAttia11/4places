import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class login extends Component {

    state= {
        email: "",
        password: "",
        errors: []
    }

    

    displayErrors = errors => 
        errors.map((error, i) => <p key={i}>{error}</p>)
    

    //do it that way with event.target to make the same fn valid for both email & pass
    handleEmailChange = event => {
        this.setState({ email : event.target.value })
    }
    handlePasswordChange = event => {
        this.setState({ password : event.target.value })
    }

    // for the button
    submitForm = async (event) => {
        event.preventDefault();

        const dataToSubmit = {
            email: this.state.email,
            password: this.state.password
        }

        if(this.isFormValid(this.state)){
            this.setState({errors: [] })
            console.log(dataToSubmit) //just for debugging
            const response = await this.loginUser(dataToSubmit)
            console.log(response) //just for debugging
            if(response.loginSuccess){
                this.props.history.push('/')
            }else {
                this.setState({
                    errors: this.state.errors.concat(
                        "failed to log in, please check your email and password"
                    )
                })
            }
        }else {
            this.setState({
                errors: this.state.errors.concat('Form is not valid')
            })
        }
    }

    isFormValid = ({ email, password }) => email && password

    loginUser = (dataToSubmit) => {
        const request = axios.post('api/users/login', dataToSubmit)
                        .then(response => response.data)
        return request
    }      

    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="email">E-mail: </label><br/>
                    <input 
                        name="email"
                        id="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={e => this.handleEmailChange(e)}
                    /><br/>
                    
                    <label htmlFor="password">Password: </label><br/>
                    <input 
                        name="password"
                        id="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={e => this.handlePasswordChange(e)}
                    /><br/>

                    {this.state.errors.length > 0 && (
                        <div>
                            {this.displayErrors(this.state.errors)}
                        </div>
                    )}

                    <button
                        name="action"
                        type="submit"
                        onClick={e => this.submitForm(e)}
                    >
                        Login
                    </button>

                    <Link to="/signup">
                        <button
                            name="action"
                            type="submit"
                        >
                            Go to Signup Page
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}
