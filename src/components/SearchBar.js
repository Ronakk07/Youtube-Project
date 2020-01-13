import React from 'react';

class SearchBar extends React.Component  {

    state = { term: '' };

    onInputChange = (event) => {
        //We want to take the value of input and change it dynamically
        this.setState({ term: event.target.value })
    };
    
    onFormSubmit = (event) => {
        // To prevent the browser from refreshing after pressing Enter
        //We use preventDefault method
        event.preventDefault();
        this.props.CallMe(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;