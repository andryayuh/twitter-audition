import React from 'react';
import { Segment, Grid, Header, Label, Divider } from 'semantic-ui-react';
import Linkify from 'react-linkify';

class ItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.props.handleSearch(e.target.textContent);
  }

  findAtMentionOrHashtag() {
    let words = this.props.tweet.text.split(' ');

    let parsed = words.map(word => {
      return word[0] === '@' || word[0] === '#' ? <span style={{color: '#5982c0'}} onClick={this.handleSearch}>{word}</span> : word;
    });

    return parsed.map((el) => {
      let child = typeof el === 'string' ? ' ' + el + ' ' : ' ' + el.props.children + ' ';
      let props = typeof el === 'string' ? null : el.props;
      return React.createElement('span', props, child);
    });

  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column width={15}>
          <Header as='h3' >
            <Label style={{marginTop: '5px'}} circular size='big' color={this.props.tweet.color}>{this.props.tweet.username.slice(0, 1).toUpperCase()}</Label>
            {'    '} @{this.props.tweet.username}・{this.props.tweet.dateTime}
          </Header>
          <Linkify>
            <Header.Subheader style={{marginLeft: '46px'}}>{this.findAtMentionOrHashtag()}</Header.Subheader>
          </Linkify>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default ItemEntry;