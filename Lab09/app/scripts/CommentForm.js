//PART 3: COMMENT FORM DECLARATION
import React from "react";

var CommentForm = React.createClass({
    getInitialState: function() {
        return {
            author: '',
            text: ''
        };
    },
    handleAuthorChange: function(e) {
        this.setState({
            author: e.target.value
        });
    },
    handleTextChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },
    // override the submission form
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        // if not text or not author then don't update
        if (!text || !author) {
            return;
        }
        // submit author and text properties
        this.props.onCommentSubmit({author: author, text: text});
        // otherwise send request to the server
        this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <div className="commentForm" onSubmit={this.handleSubmit}>
                {/*form the send comments*/}
                <form className="commentForm">
                    <input
                        type="text"
                        placeholder="Your name..."
                        // value allows for controlled components
                        value={this.state.author}
                        // on change allows it as well
                        onChange={this.handleAuthorChange}
                    />
                    <input
                        type="text"
                        placeholder="Your comment..."
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                    <input type="submit" value="Post"/>
                </form>
                {/*comments.json will pass down to these*/}
                {/*this.props.author*/}
                {/*this.props.children*/}
                {/*<Comment author="Pete Hunt"> This is one comment </Comment>*/}
                {/*<Comment author="Jordan Walke"> This is *another* </Comment>*/}
            </div>
        );
    }
});

export default CommentForm;