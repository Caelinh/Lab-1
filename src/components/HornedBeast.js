import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class HornedBeast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            votes: 0,
            hasChanged: null
        }
    }

    handleClick = (e) => {
        this.setState({ votes: this.state.votes + 1 });
        this.setState({ hasChanged: true });
        
        
    }
    modalClick = () => this.props.selectedBeast(this.props.title,this.props.image_url,this.props.description, this.state.hasChanged)

    render() {
        return (
            <Card style={{ width: '18rem', margin: 'auto', padding: '10px' }}>
                <Card.Img onClick={this.modalClick} variant="top"  src={this.props.image_url} />
                <Card.Body>
                    {this.state.hasChanged && (<p>❤️</p>)}
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}<br></br> 
                        Votes: {this.state.votes}
                    </Card.Text>
                    
                    <Button variant="primary" onClick={this.handleClick}>Vote for me</Button>

                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;