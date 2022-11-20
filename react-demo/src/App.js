import './App.css'
import './appstyles.css'
import style from './appstyles.module.css'
import { Greet } from './components/greet'
import { Message } from './components/message'
import { ClickHandler } from './components/clickHandler'
import { ParentComponent } from './components/parentComponent'
import { UserGreeting } from './components/usergreeting'
import { NameList } from './components/namelist'
import { StyleSheet} from './components/stylesheet'
import { Inline } from './components/inline'
// import { Form } from './components/form'
import { PostList } from './components/postlist'
import { PostForm } from './components/postform'
function App() {
  return (
    <div className="App">
        <br />
        {/* <Form/> */}

        <PostList></PostList>

        <Message></Message>
        <Greet name='Nipuna' nickname='Nick'/>
        <Greet name='Gayani' nickname='Gana'> <p>This is children props</p> </Greet>
        <button>Action</button>  

        <PostForm />

        <ClickHandler />
        <ParentComponent />
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <StyleSheet></StyleSheet>
        <Inline></Inline>
      
        <h1 className='error' >Error</h1>
        <h2 className= {style.mango} >success</h2>

    </div>
  ) 
}
export default App;
