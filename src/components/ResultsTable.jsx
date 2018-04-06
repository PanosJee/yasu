import './ResultsTable.css';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { CSVLink } from 'react-csv';

class ResultsTable extends React.Component {
    render() {
        function getCols(results) {
            let keys = new Set([]);
            let columns = [];
            results.forEach( row => {
                let new_keys = new Set(Object.keys(row));
                keys = new Set([...keys, ...new_keys])
            });
            keys.forEach(key => {
                console.log(key);
                columns.push({dataField: key, text: key, sort: true})
            });
            return columns;
        }
        return ((typeof this.props.results !== 'undefined' && this.props.results.length > 0) ? 
        <div>
            <CSVLink 
                className='btn btn-primary download-csv'
                filename='data.csv'
                target=''
                data={this.props.results}>
                CSV
            </CSVLink>
            <BootstrapTable keyField='id' data={this.props.results} columns={getCols(this.props.results)} pagination={paginationFactory()} /> 
        </div>
            : null
        );
    }
};

export default ResultsTable;