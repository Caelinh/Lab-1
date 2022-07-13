import { Component } from 'react';
import { Image } from 'react-bootstrap';


class HornedBeast extends Component {

    render() {
        return (
            <div className='Beast'>
            <>
            <h1>{this.props.hornList.map(beast => beast.horns)}</h1>
            {this.props.hornList.map(beast => <Image width="200px" src={beast.image_url} onClick={()=>this.props.selectBeast(beast)} />)}
            </>
            </div>
        )
    }
}

export default HornedBeast;