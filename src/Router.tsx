import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './routes/Home/Home';
import { Pokemon } from './routes/Pokemon/Pokemon';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokemon/:id">
                    <Pokemon />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
