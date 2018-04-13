import React from 'react';

class ResultsCounter extends React.Component {
    render() {
        return (
            <p>Found {this.props.count} results</p>
        );
    }
}

export default ResultsCounter;