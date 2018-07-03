import React, { Component } from 'react'

class MessageForm extends Component {
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addMessage()

    }


    render() {
return (
    <form 
    className="MessageForm"
    onSubmit={this.handleSubmit}
    >
    <input 
        autoFocus
        type="text"
        name="body"
        placeholders="Type a message..."
    />
    <button type="submit">
    Send
    </button>
    </form>

)
    }   
}
export default MessageForm