import { Component } from 'react';



class HornedBeast extends Component {



    render() {
        return (
            <div className='Beast'>
               <img src ={this.props.img} alt = "pictures" /> 
               <h2>{this.props.title}</h2>
               <p>{this.props.url}</p>
            </div>
        )
    }
}

export default HornedBeast;