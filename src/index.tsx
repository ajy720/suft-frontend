import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProfileProvider } from './hooks/useProfile';
import { MealProvider } from './hooks/useMeal';
import Main from './pages/Main';
import Cbt from './pages/Cbt';
import RegisterPage from './pages/RegisterPage';
import Admin from './pages/Admin';
import AdminEdit from './pages/Admin/AdminEdit';
import Info from './pages/Info';
import Privacy from './pages/Privacy';
import BasicSubject from './pages/Subjects/BasicSubject';
import MajorSubject from './pages/Subjects/MajorSubject';
import Rank from './pages/Rank';

import './css/color.css';

const index = (
    <BrowserRouter>
        <Switch>
            <ProfileProvider>
                <MealProvider>
                    <Route exact path="/" component={Main}/>
                </MealProvider>
                <Route exact path="/cbt/:subject/:grade/:times" component={Cbt}/>
                <Route exact path="/basic" component={BasicSubject}/>
                <Route exact path="/major" component={MajorSubject}/>
                <Route exact path="/rank" component={Rank}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/admin/edit/:id" component={AdminEdit}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/info" component={Info}/>
                <Route exact path="/privacy" component={Privacy}/>
            </ProfileProvider>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(index, document.getElementById('root'));
