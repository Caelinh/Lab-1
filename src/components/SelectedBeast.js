import { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class SelectedBeast extends Component {
    

    
    render(){
        return(
        <Modal show={this.props.selectState} onHide={this.props.selectState}>
        <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <img width={'400px'} alt ="horned beasts" src ={this.props.image} />
          <p>{this.props.description}</p>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
        )
}
}
export default SelectedBeast;