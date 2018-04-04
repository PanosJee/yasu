import './ResultsTable.css';
import React from 'react';

module.exports = class ResultsTable extends React.Component {
    render() {
        return (
            <table className="resultstable">
                <tbody>
                    {this.props.results.map((row, i) =>
                        <tr className="clickable" onClick={this.props.showSelected} key={i}>
                            {row["_time"] + " - " + row["_raw"]}
                            </tr>
                    )}
                </tbody>
            </table>
        );
    }
}