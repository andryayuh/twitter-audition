import React from 'react';
import { Segment, Grid, Header, Label, Divider } from 'semantic-ui-react';

class ItemEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' >
            <Label circular size='big' color={this.props.tweet.color}>{this.props.tweet.username.slice(0, 1).toUpperCase()}</Label>
            {'  '} {this.props.tweet.username}・{this.props.tweet.dateTime}
          </Header>
          <Header.Subheader style={{marginLeft: '46px'}}>{this.props.tweet.text}</Header.Subheader>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default ItemEntry;