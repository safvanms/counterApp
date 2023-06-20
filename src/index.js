import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



function Index() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )

}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorkerRegistration.register();