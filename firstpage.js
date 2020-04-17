import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import ludoboard from './images/LUDO.png';
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.png';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import icon from './images/icon.png';



export class FirstPage extends Component {


	render(){

	return (<>
     <h1 className="heading"> Ludo Game </h1>
     <div className="board">
     <img src={coverimage} className="img"/><br/>
     <button id="playbutton" onClick={this.props.handler}> play </button>
     </div>
     </>
     )
	}
}