import React,{Component} from 'react';
import './App.css';
import {FormGroup,FormControl,InputGroup,Glyphicons, Glyphicon} from 'react-bootstrap';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }
    search(){
        console.log('this.state',this.state);
    }
    render(){
    return(
        <div className='App'>
        <div className='App-title'>Music App From Music Master</div>
        <FormGroup>
            <InputGroup>
          <FormControl title='text' placeholder='Search for an artist'
          query={this.state.query}
          onchange={event=>{this.setState({query: event.target.value})}}
          onKeyPress={event=>console.log('event.key',event.key)}>
              </FormControl>
              <InputGroup.Addon onClick={()=>this.search()}>
              <Glyphicon glyph='search'>
              </Glyphicon>
              </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
        <button>Search here</button>
        <div className='Profile'>
        <div>Artist Name</div>
        <div>Artist Picture</div>
        </div>
        <div className='gallary'>
        gallary</div>
        </div>
    )
}
}
export default App;