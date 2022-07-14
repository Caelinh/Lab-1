import { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends Component {
    
    constructor() {
        super();
        this.state= {
            changedState : null
        }
    }
   
    displayModal = () => this.setState({changedState: this.props.selectState});
    
    render(){
        return(
        
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <img width={'400px'} alt ="horned beasts" src ={this.props.image} />
          <p>{this.props.descript}</p>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
        )
}
}
export default SelectedBeast;