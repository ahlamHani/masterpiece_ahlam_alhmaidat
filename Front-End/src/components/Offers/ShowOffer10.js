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
              Offer Beauty
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
             
              <p>
              OUD MILANO Discount 46%  all Product For 500 points
              </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger"onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>



        )
    }
}


