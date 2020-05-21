import React, { Component } from 'react'
import './signup.css'
import axios from 'axios'



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
            <div className="signup-container">
                <h1>Signup</h1>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="input-container">
                        <input
                        name="name" 
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.HandleNameChange(e)} 
                        /><br/>
                    </div>

                    <div className="input-container">
                        <input
                        name="email" 
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={(e) => this.HandleEmailChange(e)} 
                        /><br/>
                    </div>

                    <div className="input-container">
                        <input
                        name="password" 
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => this.HandlePasswordChange(e)} 
                        /><br/>
                    </div>

                    <div className="input-container">
                        <input
                        name="repassword" 
                        type="password"
                        id="repassword"
                        placeholder="Re-Enter Password"
                        value={this.state.repassword}
                        onChange={(e) => this.HandleRePasswordChange(e)} 
                        /><br/>
                    </div>

                    <div className="input-container">
                        <input
                        name="lastname" 
                        type="text"
                        id="lastname"
                        placeholder="LastName"
                        value={this.state.lastname}
                        onChange={(e) => this.HandleLastNameChange(e)} 
                        /><br/>
                    </div>

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
                </form>
            </div>
        )
    }
}
