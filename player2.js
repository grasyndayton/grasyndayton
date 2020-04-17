import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import icon from './images/icon.png';
import Updatedcomponent from './hoc.js'
import './style.css'

class Player2 extends Component {

	render(){
		const {Dicehandler, Player2iconhandler} = this.props
	return (
		<> <img src = {icon} title="player2icon1" id="player2icon1" onClick={Player2iconhandler} className="player2icon1"/>
		<img src = {icon} title="player2icon2" id="player2icon2" onClick={Player2iconhandler} className="player2icon2"/>
		<img src = {icon} title="player2icon3" id="player2icon3" onClick={Player2iconhandler} className="player2icon3"/>
		<img src = {icon} title="player2icon4" id="player2icon4" onClick={Player2iconhandler} className="player2icon4"/>
		<button onClick={Dicehandler} style={{"z-index":"-1", "float":"right", "margin":"27% 12% 0% 0%"}}> Roll Dice player 2 </button>
		</>
		)
}
}

export default Updatedcomponent(Player2, "player2")



