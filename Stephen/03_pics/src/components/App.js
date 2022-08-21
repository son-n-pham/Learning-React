import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    // const response = await axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID zxBhMMeZ3Sr2RQBYSX2wD_0VlXN3IKxCXujbJJGIDqI',
    //   },
    // });
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
