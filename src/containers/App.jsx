import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from '../components/NotFound'

module.exports = class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route path="/about" component={Search} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}