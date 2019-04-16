import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Dashboard from '../components/Dashboard/Dashboard';

 
const AppRouter = () => (
    <BrowserRouter>
        <div className='container-main'>
            <Switch>
                <Route path="/" component={Welcome} exact={true} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;