import React from 'react';
import './btstyle.css'
import {FirstPage} from './firstpage.js'
import Secondpage from './firstplayer.js'


class App extends React.Component {
constructor(){
	super()
	this.state = {
		show:false,
		user:''
	}
}

clickHandler = () => {
	var name = prompt("YOUR NAME")
	this.setState({
		show:false,
		user:name
	})
}

    render() {
    	var fisrtpage;
    	var secondpage;
    	if(this.state.show){
    		fisrtpage = <FirstPage handler={this.clickHandler}/>
    	} else {
    		secondpage = <Secondpage value={this.state.user}/>
    	}

      return (
     <React.Fragment>
     {fisrtpage}
     {secondpage}
     </React.Fragment>
      );
    }
  }
  
  export default App;