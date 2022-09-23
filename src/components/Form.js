import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state={
            username: "",
            comment: "",
            framework: ""
        }

        this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
        this.handlerCommentChange = this.handlerCommentChange.bind(this);
        this.handlerFrameworkChange = this.handlerFrameworkChange.bind(this);
        this.handlerSubmitButton = this.handlerSubmitButton.bind(this);
    }


     handlerUsernameChange(param) {
         this.setState(
            {username: param.target.value}
         )
        console.log(`username value: ${param.target.value}`);   
     }

     handlerCommentChange(param){
        this.setState(
            {comment: param.target.value}
        )
        console.log(`Comment value: ${param.target.value}`);   
     }

     handlerFrameworkChange(param){
        this.setState({framework: param.target.value});
        console.log(`Framework value: ${param.target.value}`);   
     }

     handlerSubmitButton(e){
        alert(`les valeur : ${this.state.username} -- ${this.state.comment} -- ${this.state.framework}`);
        e.preventDefault();

     }

    render() { 
        const { username, comment, framework} = this.state;
        return ( 
            <form>
               <div>
                 <label>Username:</label>
                 <input 
                 type="text"
                 value={username}
                 onChange={this.handlerUsernameChange}
                  />
               </div>
               <div>
               <label>Comment:</label>
                <textarea
                 type="text"
                 value={comment}
                 onChange={this.handlerCommentChange}
                ></textarea>
               </div>
               <div>
                <label>Framework:</label>
                <select value={framework} onChange={this.handlerFrameworkChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vu">Vu</option>
                </select>
               </div>
               <button type='submit' onClick={this.handlerSubmitButton}>Submit</button>
            </form>
         );
    }
}
 
export default Form;