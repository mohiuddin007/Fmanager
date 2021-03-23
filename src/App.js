import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddNewCatagory from './Components/Product/AddNewCatagory';
import CategoryAndSubCategory from './Components/Product/CategoryAndSubCategory';
import ProductEntry from './Components/Product/ProductEntry';


function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/">
           <Dashboard/>
        </Route>
        <Route path="/product/addNewCategory">
          <AddNewCatagory/>
        </Route>
        <Route path="/product/categoryAndSubCategory">
            <CategoryAndSubCategory/>
        </Route>
        <Route path="/product/productEntry">
          <ProductEntry/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
