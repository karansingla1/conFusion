import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from './ContactComponent.js';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import About from './AboutComponent.js'
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });

class Main extends Component {

  constructor(props){
    super(props);
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
    }

    
  render() {

    const Homepage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    const DishWithId = ({match}) => {
      return(
        <>
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}/>
      }
        </>    
      );
    };

    return (
        <>
        <Header />
          <Switch>
            <Route path='/home' component={Homepage}/>
            <Route exact path='/menu' component= {() => <Menu dishes={this.props.dishes} />}></Route>
            <Route path ='/contactus' component={Contact} />
            <Route path='/menu/:dishId' component={DishWithId} /> 
            <Route path='/aboutus' component= {() => <About leaders = {this.props.leaders} />} />   
            <Redirect to ='/home' />
          </Switch>
        <Footer />
        </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));