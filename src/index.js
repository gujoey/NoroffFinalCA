import './styles/styles.scss';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import * as serviceWorker from './components/ServiceWorker/serviceWorker';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App/App';
import LoginPage from './pages/login-page/login-page.jsx';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={LoginPage} />
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

if (module.hot) {
    module.hot.accept(render);
}

serviceWorker.unregister();