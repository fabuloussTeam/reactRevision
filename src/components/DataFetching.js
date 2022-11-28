import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [id] )

    return ( 
        <div>
            {
                <React.Fragment>
                    <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                <h2>{post.title}</h2>
                </React.Fragment>
             /** posts.map(post => <ul titlekey={post.id}>
                 <li>{post.userId}</li> 
                 <li>{post.title}</li> 
                 <li>{post.body}</li> 
            </ul>) */
            }
        </div>
     );
}

export default DataFetching;