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
import HookCounterTree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ContextHookA from './components/ContextHookA';
import { FullNameProvider, IdNumberProvider } from './components/UserContextHook';
import UseReducerHookOne from './components/UseReducerHookOne';
import UseReducerHookTwo from './components/UseReducerHookTwo';
import UseReducerHookThree from './components/UseReducerHookThree';
import UseReducerWithContextA from './components/UseReducerWthContextA';
import UseReducerWithContextC from './components/UseReducerWithContextC';
import UseReducerWithContextB from './components/UseReducerWithContextB';
import React, { useReducer } from 'react';
import DataFetchingOne from './components/DataFetchingOne';



// Valeur initial
const initialState = 0;

// Function reducer
const reducerFunction = (state, action) => {
  switch (action) {
    case 'increment':
        return state + 1;
    case 'decrement':
        return state - 1
    case 'reset':
        return initialState    
    default:
        return state
  }
}

export const CounterContext = React.createContext()

/**
 *  1 - on definit useReducer() ensuite on cree le initialState et la function reducer
 *  2 - on definit le createContext ensuite on fourni les donnee aux composant mere avec le CounterContext.Provider
 *  3 - On vas dans les composants fourni puis on importe le context que l'on exploite dans 
 * useContext() pour acceder la valeur du provider(CounterContext.Provider)
 *  4 - Puis on l'utilise dans le render().
 * 
 */
function App() {

 // const  [count, dispatchWithouAction] = useReducer(reducerFunction, initialState)

  return (
    <div className="App">
  
  {/** Fetching data with useReducer Part1 */}
  <DataFetchingOne />


  {/** useReducer with useContext  
    <div>count - {count}</div>

  <CounterContext.Provider
    value={{counterState:count, counterDispatch: dispatchWithouAction}}
  >
    <UseReducerWithContextA />
    <UseReducerWithContextB />
    <UseReducerWithContextC />
  </CounterContext.Provider>
  */}

    {/** Multiple useReducers 
    <UseReducerHookThree /> */}

    {/** useReducer Hook: part2
    <UseReducerHookTwo />  */}

    {/** useReducer Hook: Part01 (simple state and action) 
      <UseReducerHookOne /> */}




      {/** useContext Hook: 1
       * 1- On creer le context
       * 2- On fourni les donnees au composant le plus haut avec provider
       * 3- On recupere les donnees avec useContext() 
       
    <FullNameProvider value={"Tjom Emmanuel"}>
        <IdNumberProvider value={"FGHTQQSFFFD"}>
              <ContextHookA />
        </IdNumberProvider>
    </FullNameProvider>
*/}

  {/* Recuperer les donnees avec API avec useEffect et Axios, 
      a partir d'un button click
       <DataFetching />
   */}


   {/* Incorrect dependency avec useEffect: 
   Ne pas associer le non rerendring([]) d'useEffect et demonter un composant
    <IntervalClassCounter />
      <IntervalHookCounter />
   */}
      
  {/* Empecher le rerendring de useEffect(componentDidUpdate).
  <ClassMouse /> 
  <HookMouse/> */}


  {/* useEffect Hook : It replace componentDidMount and componentDidUpdate. It run each time after render 
   conditionement du rechargement du Hook useEffect
    <ClassCounterOne /> 
    <HookCounterOne /> */}
     
     
     {/* useState avec un tableau <HookCounterFour />*/} 
     {/* useState avec un objet <HookCounterTree /> */ }
     {/* useState avec utilisation du PrevState <HookCounterTwo /> */ }
     { /* <HookCounter /> */}


     {/* Requete HTTP POST  <PostForm /> */}
     { /* Requete HTTP GET <PostList />*/ }
     {/*** Context part01 & part02
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
