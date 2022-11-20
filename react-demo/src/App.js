import './App.css';
import { Greet } from './components/greet'
import { Message } from './components/message'
import { ClickHandler } from './components/clickHandler'
import { ParentComponent } from './components/parentComponent'
import { UserGreeting } from './components/usergreeting'
import { NameList } from './components/namelist'
import { StyleSheet} from './components/stylesheet'
import { Inline } from './components/inline'
function App() {
  return (
    <div className="App">
        <Message></Message>
        <Greet name='Nipuna' nickname='Nick'/>
        <Greet name='Gayani' nickname='Gana'> <p>This is children props</p> </Greet>
        <button>Action</button>  

        <ClickHandler />
        <ParentComponent />
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <StyleSheet></StyleSheet>
        <Inline></Inline>
    </div>
  )
}
export default App;
