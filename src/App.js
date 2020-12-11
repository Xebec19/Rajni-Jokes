import React,{Component} from 'react';
import Tilt from 'react-tilt'           //an npm package for tilting effect on rajni's image
import photo from './photo.jpg';        //import rajni's image
import './App.css';
import 'tachyons';                      //an npm package for styling

class App extends Component {
 
  componentDidMount(){                  //a joke will be fetched as soon as the component is mounted
    const fetchUsers = async function(){
      const user = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await user.json();
      var value1 = data.value;          
      value1 = value1.toLowerCase();    //set the string to lowercase to replace Chuck Norris with Rajni kant
      value1 = value1.replace(/chuck/g,"Rajni");
      value1 = value1.replace(/norris/g,"Kant");
      document.getElementById('demo').innerHTML = value1;   //set the joke in <p> with #demo
    }
     fetchUsers();                      //call fetchUsers()
  }
  refreshPage = () => {                 //function to be called on button click to refresh page
    window.location.reload(false);
  }
  render(){
  return (
    <div className="tc">
    <div className="container">         {/*to set the contents in center*/}
      <div className='tc measure-narrow bg-light-green ttc dib br3 pa3 ma2 grow bw shadow-5'>
      <p className='f3 dark-blue fontChange'>Rajni Jokes</p>
      
      <Tilt className="Tilt" options={{ max : 50,easing:"cubic-bezier(.03,.98,.52,.99)" }} >  {/*It tilts the image on hover */}
 <div className="Tilt-inner"> <img className="image" src={photo} alt="RajniKant" /> </div>
      </Tilt>
      <p id='demo'></p>   {/*The joke appears here */}
      <a class="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray" href="#0" onClick={this.refreshPage}>New Joke</a>  {/*Button to refresh page */}
      </div>
    </div>
    </div>
  );
}
}

export default App;
