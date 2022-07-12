import { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component{

    render() {
        return (
            <>
            <HornedBeast>
                <title>This is a title</title>
                <imageUrl>
                    this is a image url
                </imageUrl>
                <p>Description</p>
            </HornedBeast>
            <HornedBeast />
            <HornedBeast />
            </>
        )
    }
}

export default Main;