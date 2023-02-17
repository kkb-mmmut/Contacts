import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Consumer } from '../context'
import Axios from 'axios'
//inport the neccessary libraries and the components.
class Contact extends Component { //creating a new class based components of contacts which is basicall contains all the contacts.
    //on delete this is called to delete the contact and the delete_contacts action will be called 
    onDelete = async (id,dispatch) =>{
        await Axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type:'DELETE_CONTACT',payload: id});
    }; 
    render() {
        //return the single compoenets of the contact
        const { id,name,email,phone } = this.props.contact; 
        return(
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3 list-contact">
                            <h4>
                            {name} 
                            <i className="fa fa-envelope email-icon"></i>
                            <span className="emailname">{ email}</span>
                            <i className="fa fa-phone phone-icon"></i>
                            <span className="phone-number">{phone}</span>
                            <i  className="fa fa-times delete-btn" onClick={this.onDelete.bind(this,id,dispatch)}/>
                            <Link to={`Contact/edit/${id}`}>
                                <i className="fa fa-pencil contact-pencil" ></i>
                            </Link>
                            </h4> 
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes ={
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;