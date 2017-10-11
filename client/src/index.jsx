import React from 'react';
import ReactDOM from 'react-dom';
import Items from './Items.jsx';
import Search from './Search.jsx';
import { Image } from 'semantic-ui-react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tweets: [
        {
          dateTime: '11:07 PM 1 Jun 2014', 
          text: 'A Push to Save Cambodia’s Tonle Sap Lake http://t.co/8ZvgDGUWmm', 
          username: 'nytimes',
          color: 'red'
        },        
        {
          dateTime: '12:07 PM 1 Jul 2017', 
          text: 'It\'s better to be a community-college graduate than a college dropout http://t.co/k3CO7ClmIG', 
          username: 'nytimes',
          color: 'red'
        },

      ]
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query) {
    // axios.get('/search').then()
    // this.setState({
    //   tweets: e.target.value
    // });
  }

  render() {
    return (
      <div>
        <h1 style={{color: '#1ac6ff', textAlign: 'center', marginTop: '30px'}}>Search Tweets</h1>
        <Image src='http://bit.ly/2guMSSP' centered size='mini'/> 
        <Search handleSearch={this.handleSearch} />
        <Items tweets={this.state.tweets} />
      </div>
    );
    
  }

}

ReactDOM.render(<App />, document.getElementById('app'));