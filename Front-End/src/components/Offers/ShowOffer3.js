import React, { Component } from 'react';

 import {Modal, Button} from 'react-bootstrap';


export default class ShowOffer extends Component {
    constructor(props){
        super(props);
       
    }
    
    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              Offer Food 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
            
              <p>
              LOW CARB restaurant Breakfast Offer Discount 30%  For 150 points
              </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>



        )
    }
}


