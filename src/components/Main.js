import { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component{

    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <>
            <HornedBeast title = 'This is a beast' description = 'This is a description' img = 'https://via.placeholder.com/150' url = 'Thisisawebsite.com' />
            <HornedBeast title = 'This is a 2nd beast' description = 'This is a description' img = 'https://via.placeholder.com/150' url = 'Thisisawebsite.com' />
            <HornedBeast title = 'This is a 3rd beast' description = 'This is a description' img = 'https://via.placeholder.com/150' url = 'Thisisawebsite.com' />
            </>
        )
    }
}

export default Main;