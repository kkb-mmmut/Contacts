import React, { Component } from 'react'
import { Consumer } from '../context'
import Axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'
//we create edit compoents
class EditContact extends Component {
    state={
        name: '',
        email: '',//set to default values.
        phone: '',
        errors: {}
    }
//it fetch the data from api on render the page
    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await Axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    } 
    onChange = e =>{
        this.setState({ [e.target.name]:e.target.value });
    } 
    //it handles the submit fucntion 
    onSubmit = async (dispatch,e) =>{
        e.preventDefault();
        const { name,email,phone } = this.state; 
        if(name === ''){
            this.setState({errors: { name : 'Required'}})
            return;
        } 
        if(email === ''){
            this.setState({errors: { email : 'Required'}})
            return;
        } 
        if(phone === ''){
            this.setState({errors: { phone : 'Required'}})
            return;
        } 
        const updContact = {
            name,
            email,
            phone
        } 
        const { id } = this.props.match.params; 
        const res = await Axios.put(`http://jsonplaceholder.typicode.com/users/${id}`,updContact);

        dispatch({type:'UPDATE_CONTACT',payload:res.data}); 
        //Clear State and set to null
        this.setState({
            name: '',
            email: '',
            phone: '' 
        }); 
        this.props.history.push('/contact'); 
    } 
    //retrun the edit contact components.
    render() {
        const {name,email,phone } = this.state;
        return (
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3 card-style">
                <div className="card-header">
                    Edit Contact
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
                            <input className="btn btn-light btn-block" type="submit" value="Update contact"/>
                        </form>
                    </div>
                </div>
                    )
                        }}
            </Consumer>
            
        )
    }
}

export default EditContact;