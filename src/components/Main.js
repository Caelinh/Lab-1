import { Component } from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Main extends Component {


    // constructor() {
    //     super();

    // }
 
    render() {
        return (

            <Container>
                <Row>
                    {this.props.list.map(n =>
                        <Col key={n._id} sm><HornedBeast title={n.title}
                            image_url={n.image_url}
                            description={n.description}
                            selectedBeast={this.props.selectedBeast} />
                        </Col>)}
                </Row>
            </Container>


        )
    }
}

export default Main;