import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              //  console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                    console.log(error)
                    this.setState({errorMsg: error.message})
                }
            )
    }


    render() { 
      // console.log(this.state.posts.length)
      const {posts, errorMsg} = this.state
        return (  
            <div>
                Post lists here
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                {  errorMsg ? <div>{errorMsg}</div> : null }
            </div>
        );
    }
}
 
export default PostList;