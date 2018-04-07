import './Search.css';
import React from 'react';
import Searchbar from '../components/Searchbar';
import ResultsTable from '../components/ResultsTable';
import splunkSearch from "../services/splunkSearcher";
import Loader from '../components/Loader';

class Search extends React.Component {
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
        this.setState({ loading: true });
        splunkSearch(this.state.searchCommand,
            (results) => this.setState({ results: results, loading: false }),
            (error) => {
                console.error(error);
                this.setState({ results: undefined, loading: false });
            }
        );
    }
    render() {
        return (
            <div>
                <Searchbar search={this.search} searchType={this.state.searchType} updateSearchType={this.updateSearchType} />
                {
                    (typeof this.state.results !== 'undefined' && this.state.results.length > 0 && !this.state.loading) ?
                        <ResultsTable results={this.state.results} showSelected={this.showSelected} /> :
                        null
                }
                {
                    this.state.loading ?
                        <div className="results-loader">
                            <Loader />
                        </div> :
                        null
                }
            </div>
        );
    }
}

export default Search;
