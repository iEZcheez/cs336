//PART 2: COMMENT LIST DECLARATION
import React from "react";
import Comment from "./Comment";

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.firstName + " " + comment.lastName} key={comment.id}>
                    {"ID:" + comment.id}
                    {" Start Date:" + comment.startDate}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

export default CommentList;