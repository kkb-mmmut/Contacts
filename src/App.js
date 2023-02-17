import React from 'react'; 
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './component/Contact/Contacts';
import Navbar from './component/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddContact from './component/Contact/AddContact';
import { Provider } from './component/context'; 
import EditContact from './component/Contact/EditContact';

function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
        <Switch>
        <Route exact path="/" component={Contacts}/>
          <Route exact path="/contact/add" component={AddContact}/>
          <Route exact path="/contact/edit/:id" component={EditContact}/> 
        </Switch>
        </div>
      
    </div>
    </Router>
    </Provider>
  );
}
export default App;
