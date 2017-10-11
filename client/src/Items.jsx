import React from 'react';
import ItemEntry from './ItemEntry.jsx';
import { Grid } from 'semantic-ui-react';


const Items = (props) => {
  return (
    <Grid celled>
      {props.tweets.map((tweet, key) => 
        <ItemEntry tweet={tweet} key={key} />
      )}
    </Grid>
  );

};

export default Items;