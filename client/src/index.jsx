import React from 'react';
import ReactDOM from 'react-dom';
import Items from './Items.jsx';
import Search from './Search.jsx';
import { Image, Message } from 'semantic-ui-react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tweets: [],
      searched: false,
      query: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch(query) {

    console.log(`searching for ${query}...`);

    axios.get('/tweets', {
      params: {
        query: query
      }
    }).then(res => {

      console.log('matching tweets:', res.data);

      res.data.length > 0 ? 
        this.setState({
          tweets: res.data,
          searched: true,
          query: query
        }) :
        this.setState({
          tweets: [],
          searched: true,
          query: query
        });
    }).catch(err => { console.log('ERROR retrieving search results from db', err); });
  }


  render() {
    return (
      <div>
        <h1 style={{color: '#1ac6ff', textAlign: 'center', marginTop: '30px'}}>Search Tweets</h1>
        <Image src='http://bit.ly/2guMSSP' centered size='mini'/> 
        <Search handleSearch={this.handleSearch} />
        {
          !this.state.searched ? (
            <div style={{width: '900px'}}></div> 
          ) : this.state.tweets.length > 0 ? (
            <Items tweets={this.state.tweets} handleSearch={this.handleSearch}/>
          ) : 
            <div style={{width: '900px'}}>
              <Message color='teal'>No results for {this.state.query} :/</Message> 
            </div>
        }
      </div>
    );
    
  }

}

ReactDOM.render(<App />, document.getElementById('app'));