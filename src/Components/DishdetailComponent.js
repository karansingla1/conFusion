import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent.js'


function RenderDish({dish}) {
    if (dish != null) {

        return(
            		<Card>
				        <CardImg top width="100%" src={dish.image} alt={dish.name} />
				        <CardBody>
				          <CardTitle>{dish.name}</CardTitle>
				          <CardText>{dish.description}</CardText>
				        </CardBody>
			      	</Card>
        )
    }
    else {
    	return(
            <div></div>
        );
    }
        
}

function RenderComments({comments}) {
	
	const commentsAll = comments.map((comment) => {
		return(
			<div key={comment.id}>
			<p>{comment.comment}</p>
			<p> -- {comment.author}, 
			<span> {comment.date.substring(0,10)}</span></p>
			</div>
		);
	});

	return (
		<div>{commentsAll}</div>
	)


}

function Dishdetail(props){

	return(
		<div className="container">
	                <div className="row">
	                    <Breadcrumb>
	                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
	                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
	                    </Breadcrumb>
	                    <div className="col-12">
	                        <h3>{props.dish.name}</h3>
	                        <hr />
	                    </div>                
	                </div>
	                <div className="row">
	                	<div className="col-12 col-md-5 m-1">
	                        <RenderDish dish={props.dish} />
	                    </div>
	                        
	                    <div className="col-12 col-md-5 m-1">
	                        <RenderComments comments={props.comments} />
	                        <CommentForm />
	                    </div>
	                </div>
	                </div>
	)
}



export default Dishdetail;
