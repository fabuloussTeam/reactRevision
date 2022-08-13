import './App.css';
import "./components/Greet";
import { Greet, Greeting } from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {

    
  return (
    <div className="App">

       <Counter></Counter>
       {/*<Message></Message>*/}
      { /* <Greet name='Eric' surname='Theodol' gender='male'/> 
       <Greet name='Louise' surname='Dupain' gender='female'/> 
       <Greet name='Enrique' surname='Inglesia' gender='male'/> 
       <Welcome name='Enrique' surname='Inglesia' gender='male'>
         <p>You are Welcome here</p>
         </Welcome>
         <Welcome name='Louise' surname='Dupain' gender='female'>
         <p>You are Welcome here</p>
         </Welcome>
         <Welcome name='Enrique' surname='Inglesia' gender='male'>
         <p>You are Welcome here</p>
         </Welcome> */}
    </div>
  );
}

export default App;
