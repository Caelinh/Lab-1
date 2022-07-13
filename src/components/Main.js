import { Component } from 'react';
import HornedBeast from './HornedBeast';
import list from '../data.json';


class Main extends Component{

    constructor(){
        super();
        
        this.state = {
            currentBeast: null,
            beastList: list,
            
        }
    }
    
    selectCurrentBeast = (beast) => {
        this.setState({ currentBeast : beast})
        
    }
    render() {
        console.log(list[0]);
        return (
          <HornedBeast hornList={this.state.beastList} selectBeast={this.selectCurrentBeast} />
        )
    }
}

export default Main;