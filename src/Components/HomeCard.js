import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';

import Post from './Post';
function HomeCard() {
  const [state, setState] = useState({ posts: [], limit: 20 });
  const { posts } = state;
  console.log('limit', state.limit);

  const fetchData = () => {
    console.log('hello');
    setState({ ...state, limit: state.limit + 10 });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?_limit=${state.limit}`)
      .then((data) => {
        setState({ ...state, posts: state.posts.concat(data.data) });
        console.log('fetched data', data.data);
      });
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?_limit=${state.limit}`)
      .then((data) => {
        setState({ ...state, posts: data.data });
        console.log('initialData', data.data);
      });
    //eslint-disable-next-line
  }, []);
  console.log('total', state.posts.length);
  return (
    <InfiniteScroll
      dataLength={state.posts.length}
      next={fetchData}
      hasMore={true}
      loader={
        <div>
          <loading className=""></loading>
        </div>
      }
    >
      <Grid item>
        {posts.map((product, index) => (
          <Post key={index} product={product} />
        ))}
      </Grid>
    </InfiniteScroll>
  );
}
export default HomeCard;
