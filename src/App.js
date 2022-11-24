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
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Users from './components/Users';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';

function App() {

    
  return (
    <div className="App">


     <HookCounterTwo />
   { /* <HookCounter /> */}


     {/* Requete HTTP POST  <PostForm /> */}
     { /* Requete HTTP GET <PostList />*/ }
    {/**
     * Context part01 & part02
    
     <UserProvider value="Emmanuel">
           <ComponentC />
     </UserProvider>
    */}
   {/*Render props part 01*
   <ClickCounterTwo />
   <HoverCounterTwo />
  <Users render={(isLoggedIn)=> isLoggedIn ? "Emmanuel4" : "Guest"}/> */}

  {/* Render props part 02: Passer une fontionalite a traver les props  */}
 {/*  <CounterTwo
      render={(count, inscrementCount) => <ClickCounterTwo 
        count={count} 
        clickCounterTwo={inscrementCount}
      />}
    />

<CounterTwo
      render={(count, inscrementCount) => <HoverCounterTwo 
        count={count} 
        hoverCounterTwo={inscrementCount}
      />}
    />
      */}
  {// Hight order component: pass component as fonctionality 
  /*<ClickCounter name='Emmanuel' />
  <HoverCounter /> */}
      
      { //Afficher les message error on component
      /* <ErrorBoundary>
       <Hero heroname='batman boy' />
       </ErrorBoundary>

       <ErrorBoundary>
       <Hero heroname='joker' />
       </ErrorBoundary>

       <ErrorBoundary>
       <Hero heroname='hulk' />
  </ErrorBoundary> */}
      {/*<PortalDemo />*/}
      {/*<FRParentInput />*/}
     {/* <FocusInput /> */}
    {/* <RefsDemo /> */}
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
