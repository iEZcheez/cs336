import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox'

import '../css/base.css';

// PART FINAL: RENDER
// React components implement a render() method that
// takes input data and returns what to display
ReactDOM.render(
    //React classes begin with uppercase letters
    //Refresh the comments every 2 seconds
    //CommentBox.props.url is changed to /people for Homework 3
    <CommentBox url="/people" pollInterval={2000} />,
    document.getElementById('content')
);