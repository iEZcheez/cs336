//PART 4: COMMENT ELEMENT
//These 'properties' are accessed through this.props.
//Using props, we will be able to read the data passed to the Comment
//from the CommentList, and render some markup:

//REMARKABLE LIBRARY:
//third-party library remarkable which takes
//Markdown text and converts it to raw HTML
import React from "react";
import Remarkable from "remarkable";

var Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

export default Comment;