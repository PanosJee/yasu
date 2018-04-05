import './Searchbar.css'
import React from 'react';

class Searchbar extends React.Component {
    render() {
        return (
            <div className="searchbar-form">
                <textarea className="searchbar-searchbox" placeholder="Search.." onChange={this.props.updateSearchType}></textarea>
                <button className="searchbar-submit" onClick={this.props.search} >{this.props.searchType}</button>
            </div>
        );
    }
}

export default Searchbar;