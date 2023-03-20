import React from 'react';
import './error404.css';

export default function Error404() {

    return(
      <>
        <div id="errorContainer">
            <div className='titleErrorContainer '>
                <h1 className='titleErrorContainer__h1-game'>GAME</h1>
                <h1 className='titleErrorContainer__h1-over'>OVER</h1>
            </div>
            <h3 id="errorMessage">Error 404!</h3>
        </div>
      </>
    )
}