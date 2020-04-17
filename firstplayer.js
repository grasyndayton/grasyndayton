import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import ludoboard from './images/LUDO.png';
import one from './images/1.jpg';
import icon from './images/icon.png';
import Player2 from './player2.js';
import Updatedcomponent from './hoc.js'
import './App.css';







class Secondpage extends Component {

	render(){
		const {Dicehandler, Iconhandler} = this.props

		return (<>
			<img src={icon} onClick={Iconhandler} id="icon" title="firsticon" alt="firsticon" className="icon"/>
			<img src={icon} onClick={Iconhandler} id="icon2" title="secondicon" alt="secondicon" className="icon2"/>
			<img src={icon} onClick={Iconhandler} id="icon3" title="thirdicon" alt="thirdicon" className="icon3"/>
			<img src={icon} onClick={Iconhandler} id="icon4" title="fourthicon" alt="fourthicon" className="icon4"/>
			<Player2/>
			<img src={ludoboard} className="img" />
			<button onClick={Dicehandler}> Roll Dice player 1 </button>
			<img src={one} className="dice"/>
			{localStorage.getItem("str")}
			<table>
			<tr>
			 <th>
			    Player 1
			 </th>
			</tr>
			<tr>
			 <th>
			  Name
			 </th>
			 <th>
			  score
			 </th>
			</tr>
			<tr>
			 <td>
			  {this.props.value}
			 </td>
			 <td>
			 </td>
			 <td>
			 </td>
			</tr>
			</table>
			</>
			)
	}
}






export default Updatedcomponent(Secondpage, "player1")