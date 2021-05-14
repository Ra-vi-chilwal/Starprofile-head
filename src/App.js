//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Paypal from './Paypal';
import Regsitration from './Regsitration';
import Login from './Login'
 import Header from './Header';
import { Home } from './Home';

function App() {
  return (<div>
    <Header />
    <Router>
    <div className="App">
     <ul className="App-header">
       <li>
       <Link to="/">Login</Link> 
       </li>
       <li>
         <Link to="/Paypal">Paypal</Link>
       </li>
       <li>
       <Link to="/Registration">Registration</Link>
       </li>
     </ul>
     <Switch>
     <Route exact path='/' component={Login}></Route>
     <Route  path='/Paypal' component={Paypal}></Route>
       <Route  path='/Registration' component={Regsitration}></Route>
       <Route  path='/' component={Home}></Route>
     </Switch>
   </div>
</Router>
    </div>
  );
}

export default App;
