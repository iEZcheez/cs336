import React from 'react';
import ReactDOM from 'react-dom';
// Lab13
import {Router, Route, browserHistory} from 'react-router'

import CommentBox from './CommentBox'

import '../css/base.css';

// PART FINAL: RENDER
// React components implement a render() method that
// takes input data and returns what to display
ReactDOM.render(
    //React classes begin with uppercase letters
    //Refresh the comments every 2 seconds
    //"/api/comments" accesses comments.json in the directory
    (
        <Router history={browserHistory}>
        <Route path="/" component={CommentBox}/}
        <Route path="/:id" component={CommentEdit}/}
    </Router>
    ),
    document.getElementById('content')
);