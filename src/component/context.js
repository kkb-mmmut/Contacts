import React, { Component } from 'react'
import axios from 'axios'
//importing the all the imp files and the libraries.
const Context = React.createContext();
//crete a context to manage the states globally .
const Reducer = (state,action)=>{//create the reducer to fire the action and update the output.
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)
            }

        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload,
                ...state.contacts]
            }

        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.map(contact => 
                    contact.id === action.payload.id? (contact =
                        action.payload) : contact)
            }    

        default: 
            return state;    
    }
}
//creating the class components.
export class Provider extends Component{
    state = {
        contacts : [],
        dispatch: action =>{
            this.setState(state => Reducer(state,action) )
        }
    }
//fetch all teh data on rendering the page.
    async componentDidMount(){
        const res = await axios.get('http://jsonplaceholder.typicode.com/users')

        this.setState({contacts: res.data});
    }
//provider provides the states available to all the childred

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;