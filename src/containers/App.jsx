import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from '../components/NotFound'

class App extends React.Component {
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

export default App;