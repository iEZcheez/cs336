import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox'
import Remarkable from 'remarkable';
import $ from 'jquery';

// PART FINAL: RENDER
// React components implement a render() method that
// takes input data and returns what to display
ReactDOM.render(
    //React classes begin with uppercase letters
    //Refresh the comments every 2 seconds
    //"/api/comments" accesses comments.json in the directory
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);