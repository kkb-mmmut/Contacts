import React, { Component } from 'react'
import { Consumer } from '../context'
import Axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
    state={//a state object to provide the initial state of the components.
        name: '',
        email: '',
        phone: '' 
    } 
    onChange = e =>{
        this.setState({ [e.target.name]:e.target.value });
    } 
    onSubmit = async (dispatch,e) =>{
        e.preventDefault();
        const { name,email,phone } = this.state;

        // check for the empty from wether the form is filled or notl.

        if(name === ''){
            this.setState({errors: { name : 'name is required'}})
            return;
        } 
        if(email === ''){
            this.setState({errors: { email : 'email is required'}})
            return;
        } 
        if(phone === ''){
            this.setState({errors: { phone : 'phone is required'}})
            return;
        }
        // create a new objct with the following prperties
        const newContact={
            name,
            email,
            phone,
        };

        const res = await Axios.post('http://jsonplaceholder.typicode.com/users',newContact)
            dispatch({type:'ADD_CONTACT',payload:res.data});

        //Clear all the states and set to null 
        this.setState({
            name: '',
            email: '',
            phone: '' 
        });

        this.props.history.push('/Contacts');

    }

    render() {
        const {name,email,phone } = this.state;
        return (
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return( 
                        //add contacts components to add the new contacts to the list.
                        <div className="card card-style">
                                <div className="card-header">
                                    Add Contact
                                </div>
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                            <TextInputGroup
                                                label="Name"
                                                name="name"
                                                placeholder="Enter Name"
                                                type="text"
                                                value={name}
                                                onChange={this.onChange} 
                                            />

                                            <TextInputGroup
                                                label="Email"
                                                name="email"
                                                placeholder="Enter Email"
                                                type="email"
                                                value={email}
                                                onChange={this.onChange} 
                                            />

                                            <TextInputGroup
                                                label="Phone"
                                                name="phone"
                                                placeholder="Enter Phone Number"
                                                type="text"
                                                value={phone}
                                                onChange={this.onChange} 
                                            />
                                            <input className="btn btn-light btn-block" type="submit" value="Add contact"/>
                                        </form>
                                    </div>
                </div>
                    )
                        }}
            </Consumer>
            
        )
    }
}

export default AddContact;