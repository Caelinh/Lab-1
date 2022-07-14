import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class HornedBeast extends Component {

    constructor() {
        super();

        this.state = {
            votes: 0,
            hasChanged: false
        }
    }

    handleClick = () => {
        this.setState({ votes: this.state.votes + 1 });
        this.setState({ hasChanged: true });

    }

    render() {
        return (
            <Card style={{ width: '18rem', margin: 'auto', padding: '10px' }}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    {this.state.hasChanged && (<p>❤️</p>)}
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                        <p>Votes: {this.state.votes}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleClick}>Vote for me</Button>

                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;