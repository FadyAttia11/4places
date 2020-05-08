import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <Link to="/login">
                    <button
                        name="action"
                        type="submit"
                    >
                        Go to Login Page
                    </button>
                </Link>

                <Link to="/signup">
                    <button
                        name="action"
                        type="submit"
                    >
                        Go to Signup Page
                    </button>
                </Link>
            </div>
        )
    }
}
