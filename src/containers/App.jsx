import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Search from './Search'
import NotFound from '../components/NotFound'
import SiteNavbar from '../components/SiteNavbar'


class App extends React.Component {
    render() {
        return (
            <div>
                <SiteNavbar/>
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