import './ResultsTable.css';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

module.exports = class ResultsTable extends React.Component {
    render() {
        const columns = [{
            dataField: '_time',
            text: 'Time'
        }, {
            dataField: '_raw',
            text: 'Raw'
        }
        ];

        return (
            <BootstrapTable keyField='id' data={ this.props.results } columns={ columns } />
        );
    }
};