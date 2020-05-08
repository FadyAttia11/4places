import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class signup extends Component {

    state= {
        name: "",
        email: "",
        password: "",
        repassword: "",
        lastname: "",
        errors: []
    }

    displayErrors = errors =>
        errors.map((error, i) => <p key={i}>{error}</p>)

    HandleNameChange = event => {
        this.setState({ name: event.target.value })
    }
    HandleEmailChange = event => {
        this.setState({ email: event.target.value })
    }
    HandlePasswordChange = event => {
        this.setState({ password: event.target.value })
    }
    HandleRePasswordChange = event => {
        this.setState({ repassword: event.target.value })
    }
    HandleLastNameChange = event => {
        this.setState({ lastname: event.target.value })
    }

    submitForm = async (event) => {
        event.preventDefault()

        if(this.state.password === this.state.repassword){
            const dataToSubmit = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                lastname: this.state.lastname
            }
            if(this.isFormValid(this.state)){
                this.setState({ errors: [] })
                console.log(dataToSubmit) //just for debugging
                const response = await this.signupUser(dataToSubmit)
                console.log(response) //just for debugging
                if(response.success){
                    this.props.history.push('/login')
                }else {
                    this.setState({
                        errors: this.state.errors.concat("Failed to Signup, please try again later")
                    })
                }

            }else{
                this.setState({
                    errors: this.state.errors.concat('Form is not valid, some Fields are empty !')
                })
            }

        }else {
            this.setState({
                errors: this.state.errors.concat("Passwords are  Matched!")
            })
        }
        
    }

    isFormValid = ({ name, email, password, repassword, lastname }) => name && email && password && repassword && lastname

    signupUser = dataToSubmit => {
        const request = axios.post('api/users/signup', dataToSubmit)
                        .then(response => response.data)
        return request
    }

    render() {
        return (
            <div>
                <h2>Signup Page</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="name">Name: </label><br/>
                    <input
                    name="name" 
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={(e) => this.HandleNameChange(e)} 
                    /><br/>

                    <label htmlFor="email">E-mail: </label><br/>
                    <input
                    name="email" 
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={(e) => this.HandleEmailChange(e)} 
                    /><br/>

                    <label htmlFor="password">Enter Your Password:</label><br/>
                    <input
                    name="password" 
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={(e) => this.HandlePasswordChange(e)} 
                    /><br/>

                    <label htmlFor="password">Re-Enter Your Password:</label><br/>
                    <input
                    name="repassword" 
                    type="password"
                    id="repassword"
                    value={this.state.repassword}
                    onChange={(e) => this.HandleRePasswordChange(e)} 
                    /><br/>

                    <label htmlFor="lastname">LastName:</label><br/>
                    <input
                    name="lastname" 
                    type="text"
                    id="lastname"
                    value={this.state.lastname}
                    onChange={(e) => this.HandleLastNameChange(e)} 
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
                        Signup
                    </button>

                    <Link to="/login">
                        <button
                            name="action"
                            type="submit"
                        >
                            Go to Login Page
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}
