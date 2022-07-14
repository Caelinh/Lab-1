import { Component } from 'react';
import HornedBeast from './HornedBeast';
import list from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Main extends Component {

    constructor() {
        super();

        this.state = {
            beastList: list,

        }
    }

    render() {
        return (
            <Container>
                <Row>

                    {this.state.beastList.map(n => <Col sm><HornedBeast title={n.title} image_url={n.image_url} description={n.description} /></Col>)}

                </Row>
            </Container>

        )
    }
}

export default Main;