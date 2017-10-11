import React from 'react';
import ItemEntry from './ItemEntry.jsx';
import { Grid } from 'semantic-ui-react';


const Items = (props) => {
  return (
    <div style={{width: '900px'}}>
      <Grid celled>
        {props.tweets.map((tweet, key) => 
          <ItemEntry tweet={tweet} key={key} />
        )}
      </Grid>
    </div>
  );

};

export default Items;