import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, Nav} from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



	render() {
		return(

			<React.Fragment>
                <div>
				<Navbar dark expand="md">
		          <div className= "container">
		            <NavbarBrand className="mr-auto" href="/">Ristorante Con Fusion</NavbarBrand>

		            <NavbarToggler onClick={this.toggle} />
			          <Collapse isOpen={this.state.isOpen} navbar>
			            <Nav navbar>
			              <NavItem>
			                <NavLink className="nav-link" to="/home"><span className = "fa fa-home fa-lg"></span>Home</NavLink>
			              </NavItem>
			              <NavItem>
			                <NavLink className="nav-link" to="/menu"><span className = "fa fa-list fa-lg"></span>Menu</NavLink>
			              </NavItem>
			              <NavItem>
			                <NavLink className="nav-link" to="/aboutus"><span className = "fa fa-info fa-lg"></span>About</NavLink>
			              </NavItem>
			              <NavItem>
			                <NavLink className="nav-link" to="/contactus"><span className = "fa fa-address-card fa-lg"></span>Contact</NavLink>
			              </NavItem>
			            </Nav>
			          </Collapse>  
		          </div>
		        </Navbar>
		        </div>
	        	<Jumbotron>
	        		<div className="container">
	        		<div className="row row-header">
			        <div  className="col-12 col-sm-6">
			          <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
			        </div>
			        </div>
			        </div>
			    </Jumbotron>
	        </React.Fragment> 


		)
	}
}

export default Header;