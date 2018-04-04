import React from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar';
import ResultsTable from '../components/ResultsTable';
import Config from 'Config';

module.exports = class Search extends React.Component {
    constructor() {
        super();
        this.state = { searchType: '...', searchCommand: '', results: [] };
        this.updateSearchType = this.updateSearchType.bind(this);
        this.search = this.search.bind(this);
        this.showSelected = this.showSelected.bind(this);
    }

    updateSearchType(event) {
        var command = event.target.value;
        if (command.indexOf("index=") === 0 || command.indexOf("|") !== -1) {
            this.setState({ searchType: "splunk" });
        }
        else if (command.indexOf("elasticsearch") === 0) {
            this.setState({ searchType: "elasticsearch" });
        }
        else {
            this.setState({ searchType: "..." })
        }
        this.setState({ searchCommand: command });
    }

    showSelected(event) {
        alert("Do NOT select this item again");
    }

    search(event) {
        var that = this;
        axios.post(Config.serverUrl, { q: this.state.searchCommand }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((result) => {
            that.setState({ results: result.data })
            console.log(result.data);
        }, (error) => console.error(error));
    }
    render() {
        return (
            <div>
                <Searchbar search={this.search} searchType={this.state.searchType} updateSearchType={this.updateSearchType} />
                <ResultsTable results={this.state.results} showSelected={this.showSelected} />
            </div>
        );
    }
}