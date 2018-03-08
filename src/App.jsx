import React,{Component} from 'react';
import './App.css';
import {FormGroup,FormControl,InputGroup,Glyphicons, Glyphicon} from 'react-bootstrap';
import Profile from './profile';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }
    //Search method 
    search(){
        console.log('this.state',this.state);
        const Base_Url='https://api.spotify.com/v1/search?';
        const Fetch_Url=Base_Url+'q='+this.state.query+'&type=artist&limit=1';
        console.log(Fetch_Url);  
        fetch(Fetch_Url,{
          method:'GET'  
        })  
        //Callback functions
        .then(response=>(response.json()))
        .then(json=>{
            const artist=json.artists.items[0];
            console.log(artist);
            this.setState({artist})
        });
    }
    render(){
    return(
        <div className='App'>
        <div className='App-title'>Music App From Music Master</div>
        <FormGroup>
            <InputGroup>
          <FormControl title='text' placeholder='Search for an artist'
          query={this.state.query}
          onChange={event=>{this.setState({query: event.target.value})}}
          onKeyPress={event=>{if(event.key==="Enter"){this.search()}}}>
              </FormControl>
              <InputGroup.Addon onClick={()=>this.search()}>
              <Glyphicon glyph='search'>
              </Glyphicon>
              </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
        <button>Search here</button>
        <Profile>
            artist={this.state.artist}
            </Profile>
        <div className='gallary'>
        gallary</div>
        </div>
    )
}
}
export default App;