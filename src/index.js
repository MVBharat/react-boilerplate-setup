import React from 'react';
import ReactDom from 'react-dom';
import style from './index.css'
const App = () => (
    <div>
        <h1 className={style.h1} >Hello React Webpack babel setup</h1>
        <p style={{fontSize:'25px', color: 'green', textAlign:'center'}}>I'm running now</p>
    </div>
)

ReactDom.render(<App/>, document.getElementById('root') ); 