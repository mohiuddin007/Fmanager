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
import ProductList from './Components/Product/ProductList';
import AddExpense from './Components/Expenses/AddExpense';
import ExpenseList from './Components/Expenses/ExpenseList';
import OrderStatus from './Components/Orders/OrderStatus';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/dashboard">
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
        <Route path="/product/productList">
          <ProductList/>
        </Route>
        <Route path="/orderStatus">
           <OrderStatus/>
        </Route>
        <Route path="/expense/addExpense">
           <AddExpense/>
        </Route>
        <Route path="/expense/expenseList">
          <ExpenseList/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
