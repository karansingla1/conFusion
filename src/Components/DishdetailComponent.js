import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    if (dish != null) {
    	 const comments = dish.comments.map((comment) => {
			return(
				<div key={comment.id}>
				
				<p>{comment.comment}</p>
				<p> -- {comment.author}, 
				<span> {comment.date.substring(0,10)}</span></p>
				</div>
			);

		}); 

        return(

        	<div className="row">
        		<div className="col-12 col-md-5 m-1">
            		<Card>
				        <CardImg top width="100%" src={dish.image} alt={dish.name} />
				        <CardBody>
				          <CardTitle>{dish.name} Hello</CardTitle>
				          <CardText>{dish.description}</CardText>
				        </CardBody>
			      	</Card>
            	</div>

            	<div className = "col-12 col-md-5 m-1">
            		<h3>Comments</h3>
            		{comments}
            	</div>	
            </div>
        )
    }
    else {
    	return(
            <div></div>
        );
    }
        
}

function Dishdetail(props){
	return(
		<div className="container">
			<RenderDish dish={props.dish} />
		</div>
	)	

}



export default Dishdetail;
