import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DataFetching() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [] )

    return ( 
        <div>
            {
            posts.map(post => <ul key={post.id}>
                 <li>{post.userId}</li> 
                 <li>{post.title}</li> 
                 <li>{post.body}</li> 
            </ul>)
            }
        </div>
     );
}

export default DataFetching;