import React, {Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import {Link} from 'react-router-dom'    

function RenderMenuItem({dish, onClick}){

	return (
		<div  key={dish.id} className="col-12 col-md-5 m-1">

                <Card key={dish.id}>
                <Link to={'/menu/'+dish.id}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                  </Link>
                </Card>
    	</div>
    )	

}

function Menu(props){
 	const menu = props.dishes.map((dish) => {
            return (
            	<RenderMenuItem dish={dish} />
            );
        });

        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                <div className="row">
                    {menu}
                 </div>
            </div>
        );

 }

        


export default Menu;