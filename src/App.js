import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

class  App extends Component{
  render(){
    return (
   <>
   <Header/>
   <Form/>
   <Footer/>
   </>
  );
}
}

export default App;
