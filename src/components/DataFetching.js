import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFrombuttonclick, setIdfrombuttonclick] = useState(1)


    const handlerClick = id =>{
        setIdfrombuttonclick(id)
        console.log(idFrombuttonclick);
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFrombuttonclick}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [idFrombuttonclick] )


    return ( 
        <div>
            {
<span>
                    <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
                    <button onClick={() => handlerClick(id)}>Fetch Posts</button>
                <h2>{post.title}</h2>
                </span>
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