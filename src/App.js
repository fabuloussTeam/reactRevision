import './App.css';
import "./components/Greet";
import { Greet, Greeting } from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PrComponent from './components/PrComponent';
import RefsDemo from './components/RefsDemo';

function App() {

    
  return (
    <div className="App">
     <RefsDemo /> 
 {/* <PrComponent />*/}
  { /*<Table />*/}
   {/* <FragmentDemo />*/}
    {/*<LifecycleA />*/}
   {/* <Form />*/}
    { /*<NameList />*/}
     {/*<UserGreeting/>*/}
     {/*<ParentComponent />*/}
     {/* <FunctionClick/>*/}
      {/* <Counter></Counter>*/}
      {/* <Message></Message>*/}
       {/*<Greet name='Eric' surname='Theodol' gender='male'/> 
       <Greet name='Louise' surname='Dupain' gender='female'/> 
  <Greet name='Enrique' surname='Inglesia' gender='male'/> */}
      {/* <Welcome name='Enrique' surname='Inglesia' gender='male'>
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
