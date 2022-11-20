import './App.css';
import {Greet} from './components/greet';
import {Message} from './components/message'
import {ClickHandler} from './components/clickHandler'
function App() {
  return (
    <div className="App">
        <Message></Message>
       <Greet name='Nipuna' nickname='Nick'/>
        <Greet name='Gayani' nickName='Gana'> <p>This is children props</p> </Greet>
      <button>Action</button>  

        <ClickHandler />
    </div>
  )
}

export default App;
