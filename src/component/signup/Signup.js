import Axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
    state = {
        student: {
            firstName:'',
            lastName:'',
            email:'',
            age:'',
            telephone:'',
            password:''
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempStudent = {...this.state.student}
        // student.firstName === student['firstName']
        tempStudent[name] = value;
        this.setState(
            {
                student: tempStudent
            }
        )
    }
    handleSubmit = () => {
        // This will continue as an asyncronous call, does not hang the UI waiting for data from backend.
        Axios.post('http://localhost:8080/submitStudentDetails', this.state.student)
        .then(response => {
            //TODO Do step 14-17 to make an About Us page. Create 2 functional components for thank you page and footer.
            //Navigate to thank you page. 
            this.props.history.push('/thanks');
        }).catch(error => {
            //Display error message.
        });
    }
    render() {
        return (
            <div className="container sign-up-container">
                <h2>Sign up below:</h2>
                <form>
                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="firstName" value={this.state.student.firstName} className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="lastName" value={this.state.student.lastName} className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="telephone" value={this.state.student.telephone} className="form-control" placeholder="Telephone" aria-label="Telephone" />
                        </div>
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="age" value={this.state.student.age} className="form-control" placeholder="Age" aria-label="Age" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <input type="email" onChange={this.handleChange} name="email" value={this.state.student.email} className="form-control" placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="col">
                            <input type="password" onChange={this.handleChange} name="password" value={this.state.student.password} className="form-control" placeholder="Password" aria-label="Password" />
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        {/* look at step 35 to find out how to use this with a submit button.  Needs a handler call
                        in the open form tag and something about queries, etc.*/}
                        <button onClick={this.handleSubmit} className="btn btn-primary dark-blue text-gold" type="button">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;