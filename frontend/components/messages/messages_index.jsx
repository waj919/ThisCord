import React from 'react';
import MessageForm from './message_form';
import MessageItem from './message_item';


class MessageIndex extends React.Component {

    constructor(props){
        super(props)
    }



    render(){
        if(!this.props.messages) return null;
        if(!this.props.server) return null;
        return(


                <div className="messages">
            
                    <div className="message-channel-header">
                        <div className="message-hashtag">
                            &#35;          
                        </div>
                        <div className="message-channel-name">
                            {this.props.server.channels[this.props.server.channels.findIndex(channel => channel.id === this.props.channelId)].name}
                        </div>
                    </div>
                    <ul className="message-ul">
                        {this.props.messages.reverse().map(message => {
                            return <MessageItem 
                                        key={message.id} 
                                        message={message} 
                                        username={this.props.username} 
                                        deleteMessage={this.props.deleteMessage}
                                        updateMessage={this.props.updateMessage}
                                    />
                        })}         
                    </ul>
                    <MessageForm 
                        createMessage={this.props.createMessage} 
                        channelId={this.props.channelId} 
                        channelName={this.props.server.channels[this.props.server.channels.findIndex(channel => channel.id === this.props.channelId)].name}
                    />
                </div>

            

        )
    }



}

export default MessageIndex