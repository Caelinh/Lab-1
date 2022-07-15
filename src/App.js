
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import List from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import { Component } from 'react';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalTitle: null,
      modal_url: null,
      modal_description: null,
      modalState: false
    }

  }
  selectedBeast = (beast) => {
    this.setState({
      modalTitle: beast.props.title,
      modal_url: beast.props.image_url,
      modal_description: beast.props.description,
      modalState: true
    })
  }
  closeModal = () => this.setState({ modalState: false });

  render() {
    return (

      <div className="App">
        <Header />
        <Main selectedBeast={this.selectedBeast} list={List} />
        <SelectedBeast title={this.state.modalTitle}
          image={this.state.modal_url}
          description={this.state.modal_description}
          selectState={this.state.modalState} 
          closeModal = {this.closeModal}/>
        <Footer />
      </div>
    );
  }
}

export default App;
