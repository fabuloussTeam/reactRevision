import React from 'react';

function MemoComp({name}) {

    //memo: est une fonction introduit q version Reqct 16.6. elle donne le meme resultat 
    //aue une classe Pure Component  

    console.log('Rendering Memo Component');
    return ( 
        <div>
            {name}
        </div>
     );
}

export default React.memo(MemoComp);