import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state= {
      dishes: DISHES,
      selectedDish: null,
    }
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
    }

    
  render() {

    const Homepage = () => {
    return (
      <Home />
    );
  }

    return (
        <>
        <Header />
          <Switch>
            <Route path='/home' component={Homepage}/>
            <Route exact path='/menu' component= {() => <Menu dishes={this.state.dishes} />}></Route>
            <Redirect to ='/home' />
          </Switch>
        <Footer />
        </>
    );
  }
}

export default Main;
