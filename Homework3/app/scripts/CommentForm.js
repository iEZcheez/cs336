//PART 3: COMMENT FORM DECLARATION
import React from "react";

var CommentForm = React.createClass({
    getInitialState: function() {
        return {
            id: '',
            firstName: '',
            lastName: '',
            startDate: ''
        };
    },
    handleIDChange: function(e) {
        this.setState({
            id: e.target.value
        });
    },
    handleFirstNameChange: function(e) {
        this.setState({
            firstName: e.target.value
        });
    },
    handleLastNameChange: function(e) {
        this.setState({
            lastName: e.target.value
        });
    },
    handleStartDateChange: function(e) {
        this.setState({
            startDate: e.target.value
        });
    },
    // override the submission form
    handleSubmit: function(e) {
        e.preventDefault();
        var id = this.state.id.trim();
        var firstName = this.state.firstName.trim();
        var lastName = this.state.lastName.trim();
        var startDate = this.state.startDate.trim();
        // if not text or not author then don't update
        if (!id || !firstName || !lastName || !startDate) {
            return;
        }
        // submit author and text properties
        this.props.onCommentSubmit({
            id: id,
            firstName: firstName,
            lastName: lastName,
            startDate: startDate,
        });
        // otherwise send request to the server
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            startDate: ''
        });
    },
    render: function() {
        return (
            <div className="commentForm" onSubmit={this.handleSubmit}>
                {/*form the send comments*/}
                <form className="commentForm">
                    <input
                        //type is number to make number go through as appropriate data
                        type="text"
                        placeholder="Your ID..."
                        // value allows for controlled components
                        value={this.state.id}
                        // on change allows it as well
                        onChange={this.handleIDChange}
                    />
                    <input
                        type="text"
                        placeholder="Your first name..."
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Your last name..."
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    />
                    <input
                        //type is date to make data send appropriately
                        type="text"
                        placeholder="Your date started..."
                        value={this.state.startDate}
                        onChange={this.handleStartDateChange}
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