import React from 'react';
import DmMessageForm from './dm_message_form';

class DmMessages extends React.Component {

    render(){
        if(!this.props.dmChannel) return null
        return(
            <div className="dm-messages">
                <ul className="dm-messages-ul">
                    {this.props.dmChannel.messages.map(message => {
                        let username = this.props.dmChannel.user_1.id === message.sender_id ? this.props.dmChannel.user_1.username : this.props.dmChannel.user_2.username 
                        return  <li key={message.id} className="dm-messages-li">
                                    <img className="dm-message-logo" src={window.logo} />
                                    
                                    <div>
                                        <div className="dm-info">

                                           <div className="dm-name">
                                                {username}
                                            </div>

                                            <div className="dm-message-time">

                                                {message.created_at.slice(5,7)}/
                                                {message.created_at.slice(8,10)}/
                                                {message.created_at.slice(0,4)} at &nbsp;
                                                {message.created_at.slice(11, 16)}

                                            </div>
                                        </div>
                                        <div className="dm-messages-body">
                                            {message.body}
                                        </div>
                                    </div>
                                 
                               </li>
                    }).reverse()}
                    
                </ul>

                <DmMessageForm createDmMessage={this.props.createDmMessage} dmChannel={this.props.dmChannel} />
            </div>
        )
    }
}

export default DmMessages