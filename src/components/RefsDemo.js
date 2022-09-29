import React, { Component } from 'react';

class RefsDemo extends Component {
    
     /* Methode1: on declare la reference createRef() 
     dans le constructeur. Ensuite on l'insert dans le render, ensuite on l'initialise dans componentDidMoun 
      
     Methode2: on declare la reference createRef() 
     dans le constructeur. Ensuite on creer une variable callback cbRef null, on creer une fonction callback
      setCbRef qui va prendre en parametre Objet du Dom(Input). Puis on le verifie dans la fonction componentDidmount

     */
     constructor(props){
        super(props)

        this.inputRef = React.createRef() // definition de createRef
        this.cbRef = null // initialisation de la variable cbRef qui va prendre l'objet
        this.setCbRef = element => { // ini de la fonction callbac avec param l'objet
            this.cbRef = element
        }

     }

         
     componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }


      /*  this.inputRef.current.focus();
        console.log(this.inputRef);*/

       

     }

     clickhandler = () => {
       alert(this.inputRef.current.value)
       console.log(this.cbRef.c);
     }
      
    

    render() { 
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickhandler}>Click</button>
            </div>
        );
    }
}
 
export default RefsDemo;