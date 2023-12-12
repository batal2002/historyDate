import React, {FC} from 'react';
import './app.scss'
import Main from "../main/Main";


const App:FC = () => {
    return (
        <div className={'app'}>
            <div className={'center-stroke'}></div>
            <Main />
        </div>
    );
}

export default App;
