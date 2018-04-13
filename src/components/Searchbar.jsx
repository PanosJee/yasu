import './Searchbar.css'
import React from 'react';
import { Button, Input, Form, FormControl } from 'react-bootstrap';

class Searchbar extends React.Component {
    render() {
        return (
            <div className="searchbar-form">
                <Form inline>
                    <FormControl
                        type="textarea"
                        id="searchbar-searchbox"
                        placeholder="Search.."
                        onChange={this.props.onCommandChanged}
                    />
                    <Button
                        size="lg"
                        className="btn searchbar-submit"
                        onClick={this.props.onSearch} >
                        Search
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Searchbar;