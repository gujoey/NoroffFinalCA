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
import LoginPage from './pages/login-page/login-page';
import HomePage from './pages/home-page/home-page';
import CardSpecificPage from './pages/card-specific-page/card-specific-page';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={LoginPage} />
                <Route path="/home" exact component={HomePage} />
				<Route path="/card-specific/:id" component={CardSpecificPage} />
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