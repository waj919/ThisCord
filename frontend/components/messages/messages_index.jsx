import React from 'react';
import MessageForm from './message_form';
import MessageItem from './message_item';


class MessageIndex extends React.Component {

    constructor(props){
        super(props)
    }



    render(){
        if(!this.props.messages) return null;
        return(
            <div className="messages">
                <ul className="message-ul">
                    {this.props.messages.map(message => {
                        return <MessageItem key={message.id} message={message} username={this.props.username}/>
                    })}         
                </ul>
                <MessageForm createMessage={this.props.createMessage} channelId={this.props.channelId} />
            </div>
        )
    }



}

export default MessageIndex