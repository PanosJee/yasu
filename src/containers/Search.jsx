import './Search.css';
import React from 'react';
import Searchbar from '../components/Searchbar';
import ResultsTable from '../components/ResultsTable';
import splunkSearch from "../services/splunkSearcher";
import Loader from '../components/Loader';
import ResultsCounter from '../components/ResultsCounter';

class Search extends React.Component {
    constructor() {
        super();
        this.state = { searchCommand: '', results: undefined };
        this.search = this.search.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.onCommandChanged = this.onCommandChanged.bind(this);
    }

    showSelected(event) {
        alert("Do NOT select this item again");
    }

    onCommandChanged(event) {
        this.setState({ searchCommand: event.target.value });
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
                <Searchbar onSearch={this.search} onCommandChanged={this.onCommandChanged} />
                {
                    typeof this.state.results !== 'undefined' && !this.state.loading ?
                        <div className="results-counter">
                            <ResultsCounter count={this.state.results.length} />
                        </div> :
                        null
                }
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
