import React from 'react';

class MessageForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = this.input.bind(this)
    }

    input(e){
        e.preventDefault();
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let message = {
            body: this.state.body,
            channel_id: this.props.channelId
        }

        this.props.createMessage(message)
        this.setState({
            body: ""
        })
    }

    render(){
        return(
            <div className="message-form">
                <form onSubmit={this.handleSubmit}>
                    <input  type="text" 
                            className="message-input" 
                            value={this.state.body} 
                            onChange={this.input} />
                    <button type="submit" id="message-input-button">Submit</button>
                </form>

            </div>
        )
    }
}

export default MessageForm