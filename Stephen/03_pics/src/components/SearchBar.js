import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>

            {/* onInputChange is a callback function */}
            {/* <input type="text" onChange={this.onInputChange} /> */}

            {/* Instead of the below, we can call the function directly inside. */}
            {/* <input
              type="text"
              onChange={e => console.log(`2nd input: ${e.target.value}`)}
            /> */}

            {/* refactor */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
