import React from "react";

function Table() {
const items = [];

    return ( 
        <>
          {
            items.map( item => ( 
                <React.Fragment>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
          }      
          <td>Emmanuel</td>
          <td>Tjom</td>
        </>
     );
}

export default Table;