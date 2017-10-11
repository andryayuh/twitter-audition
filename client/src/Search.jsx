import React from 'react';
import { Input } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch(e) {
    const query = e.target.value.trim();
    console.log('!!!!!', query);
    this.props.handleSearch(query);
  }

  render() {
    return (
      <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '30px'}}>
        <Input size='big' placeholder='Search'
          onKeyPress={e => { if (e.key === 'Enter') { this.handleSearch(e); } }}
          icon={{ name: 'search', circular: true }} />
      </div>
    );
  }
}

export default Search;