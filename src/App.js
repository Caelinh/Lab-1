
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import List from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
     <Header />
     <Main list ={List}/>
     <Footer />
    </div>
  );
}

export default App;
