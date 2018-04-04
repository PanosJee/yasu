import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

module.exports = class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Page Not Found!</h1>
                    <p className="lead">This page does not exist, but it is beautiful.</p>
                    <hr className="my-2" />
                    <p className="lead">
                        <Button color="primary">Go Home</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}