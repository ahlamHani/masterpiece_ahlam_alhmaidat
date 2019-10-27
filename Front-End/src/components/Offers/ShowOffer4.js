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
              Offer Cinema
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
              <p>
              Discount Cinema Discount 30% Cinema With popcorn or chips For 500 points
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


