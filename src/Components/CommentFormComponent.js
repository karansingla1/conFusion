import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);



class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
    } 

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    
    }

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    
    }

    render() {
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>Add Comment</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                  <ModalBody>
                    <LocalForm onSubmit = {(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor = 'rating' md={4}> Rating </Label>
                            <Col md={12}>
                                <Control.select model = '.rating' id='rating' name='rating'
                                    className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Control.select>    
                            </Col>  
                        </Row>

                        <Row className='form-group'>
                            <Label htmlFor = 'rating' md={4}> Your Name </Label>
                            <Col md={12}>
                                <Control.text model = '.fullname' id='fullname' name='fullname'
                                    className='form-control'
                                    validators = {{maxLength:maxLength(15), 
                                                    minLength:minLength(3)}} />
                                <Errors className="text-danger" model=".fullname" show="touched"
                                messages={{
                                    maxLength: 'Max 15 characters',
                                    minLength: 'Min 3 characters',
                                }} />
                            </Col>  
                        </Row>

                        <Row className='form-group'>
                            <Label htmlFor = 'rating' md={4}> Your Comment </Label>
                            <Col md={12}>
                                <Control.textarea model = '.comment' id='comment' name='comment'
                                    className='form-control' rows = "6"/>    
                            </Col>  
                        </Row>

                        <Row className='form-group'>
                            <Col offset={1}>
                                <Button type="submit" color="primary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                  </ModalBody>
                </Modal>
              </div>

        )
    }

}

export default CommentForm;



