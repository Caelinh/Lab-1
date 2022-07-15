import { Component } from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';




class Main extends Component {


    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
        }

    }
    handleChange = (event) => {
        event.preventDefault()
        let horns = parseInt(event.target.value);
        let newList = this.props.list.filter(beasts => beasts.horns === horns);
        this.setState({ list: newList });

    }
    handlesubmit = (event) => event.preventDefault();

    render() {
        return (
            <div id="form" >
                <Form style={{ width: '20rem', margin: 'auto', padding: '10px' }}>
                    <Form.Text>Filter by amount of horns</Form.Text>
                    <Form.Select  onChange={this.handleChange} size="lg" id="filter" aria-label="Default select example">
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Select>
                </Form>
                <Container>
                    <Row>
                        {this.state.list.map(n =>
                            <Col key={n._id} sm><HornedBeast title={n.title}
                                image_url={n.image_url}
                                description={n.description}
                                selectedBeast={this.props.selectedBeast} />
                            </Col>)}
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Main;