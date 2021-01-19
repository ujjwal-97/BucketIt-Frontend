import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../theme';
import Post from './Post';

const useStyles = makeStyles({
  buttonColor: {
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#1574F6',
    },
  },
});

function HomeCard() {
  const classes = useStyles();
  const [state, setState] = useState({ posts: [], limit: 50 });
  const { posts } = state;
  console.log('limit', state.limit);

  const fetchData = () => {
    console.log('hello');
    setState({ ...state, limit: state.limit + 10 });
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/?_limit=${state.limit}`)
      .then((data) => {
        setState({ ...state, posts: state.posts.concat(data.data) });
        console.log('fetched data', data.data);
      });
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/?_limit=${state.limit}`)
      .then((data) => {
        setState({ ...state, posts: data.data });
        console.log('initialData', data.data);
      });
    //eslint-disable-next-line
  }, []);
  const [toggle, setToggle] = React.useState('trending');

  const handleChange = (event, newToggle) => {
    setToggle(newToggle);
  };
  console.log('total', state.posts.length);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} direction="column" alignItems="flex-start">
          <Grid item>
            <ToggleButtonGroup
              size="small"
              value={toggle}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton className={classes.buttonColor} value="trending">
                <strong>Trending</strong>
              </ToggleButton>
              <ToggleButton className={classes.buttonColor} value="recent">
                <strong>Recently Added</strong>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <InfiniteScroll
          dataLength={state.posts.length}
          next={fetchData}
          hasMore={true}
          loader={<div>loading ...</div>}
        >
          <Grid item>
            {posts.map((product, index) => (
              <Post key={index} product={product} />
            ))}
          </Grid>
        </InfiniteScroll>
      </ThemeProvider>
    </>
  );
}
export default HomeCard;
