import React from "react";

function Table() {
const items = [];

    return ( 
        <>
          {
            items.map( item => ( 
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
          }      
          <td>Emma</td>
          <td>Tjom</td>
          </>
     );
}

export default Table;