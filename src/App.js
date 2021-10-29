// import logo from './logo.svg';
import './App.css';
//import { Button } from 'react-bootstrap'
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Header from './Header';
import ProductList from './ProductList';
import Protected from './Protected';
import SIngleProduct from './SIngleProduct'
import SearchProduct from './SearchProduct';

import {
   BrowserRouter as Router,
   Switch,
   Route,
} from 'react-router-dom'


function App() {
   return (
      <div className="App">
         <Router>
            {/* <Header /> */}
            {/* <h1>E-Commerce</h1> */}
            <Switch>

               <Route exact path="/" component={Login} />

               <Route path="/register" component={Register} />

               <Route path="/add" >
                  <Protected Cmp={AddProduct} />
               </Route>

               <Route path="/edit/:id">
                  <Protected Cmp={UpdateProduct} />
               </Route>

               <Route path="/list" >
                  <Protected Cmp={ProductList} />
               </Route>
               <Route path="/search" >
                  <Protected Cmp={SearchProduct} />
               </Route>

               <Route path="/logout" component={Logout} />

               <Route path="/product/:id" component={SIngleProduct} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;

