import React, { Component } from 'react'//importing all the necessary files and folders
import Contact from './Contact'
import { Consumer } from '../context'
//creating a new class based components of contacts which is basicall contains all the contacts.
class Contacts extends Component { 
    deleteContact = (id) =>{
        const { contacts } = this.state;
        const newContact = contacts.filter(contact =>//handles the delete function to delete the contacts
            contact.id !== id
        );
        this.setState({
            contacts: newContact
        })
    };
    //retruns the contacts container
    render() {
            return(
                <Consumer>
                    {value =>{
                        const { contacts } = value;
                        return(
                            <React.Fragment>
                                <h1 className="display-4 mb-2">
                                    <span className="textHeading"><center>Contacts </center></span>
                                </h1>
                                {contacts.map(contact => 
                                <Contact 
                                    key={contact.id}
                                    contact={contact} 
                                    deleteClickHandler={this.deleteContact.bind(this,contact.id)}
                                />
                                )}
                            </React.Fragment>
                        )
                    }}    
                </Consumer>
            )
        }
}
export default Contacts;