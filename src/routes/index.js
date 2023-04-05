
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Customers from '../pages/Customers';
import New from '../pages/New';

import Home from '../views/Tarefas/Home';
import Task from '../views/Tarefas/Task';
import QrCode from '../views/Tarefas/QrCode';

export default function Routes(){
    return(
   <BrowserRouter>
   <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} isPrivate />
        <Route exact path="/profile" component={Profile} isPrivate />
        <Route exact path="/customers" component={Customers} isPrivate />
        <Route exact path="/new" component={New} isPrivate />
        <Route exact path="/new/:id" component={New} isPrivate />
        <Route exact path="/home" component={Home} isPrivate />
        <Route exact path="/task" component={Task} isPrivate />
        <Route exact path="/task/:id" component={Task} isPrivate />
        <Route exact path="/qrcode" component={QrCode} isPrivate />
        
    </Switch>
    </BrowserRouter>
    )
}