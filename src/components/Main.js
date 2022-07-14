import { Component } from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './SelectedBeast';



class Main extends Component {


    constructor() {
        super();
        this.state= {
            modalTitle : null,
            modal_url : null,
            modal_description : null,
            changedState : null
        }
    }
    selectedBeast = (title,image,description,state) => {
        this.setState({modalTitle: title})
        this.setState({modal_url: image})
        this.setState({modal_description: description})
        this.setState({changedState : state})
    }
    
    render() {
        return (
            <>
            <Container>
                <Row>

                    {this.props.list.map(n =>
                        <Col key= {n._id} sm><HornedBeast title={n.title}
                            image_url={n.image_url}
                            description={n.description}
                            selectedBeast ={this.selectedBeast} />
                        </Col>)}

                </Row>
            </Container>
            
            <SelectedBeast title = {this.state.modalTitle} 
            image = {this.state.modal_url} 
            descript = {this.state.modal_description}
            selectState = {this.state.changedState} />
            </>
        )
    }
}

export default Main;