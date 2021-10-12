import React from 'react';
import DmMessageForm from './dm_message_form';

class DmMessages extends React.Component {

    componentDidUpdate(prevProps, prevState){
        if (this.props.match.params.dmChannelId !== undefined && 
            prevProps.match.params.dmChannelId !== this.props.match.params.dmChannelId){
            this.props.fetchDmMessages(this.props.match.params.dmChannelId)
        }
    }

    render(){
        if(!this.props.dmChannel) return null
        if(!this.props.dmMessages) return null
        let dm;
        if(this.props.dmChannel.user_1.id === this.props.currentUserId){
            dm = this.props.dmChannel.user_2.username
        } else {
            dm =this.props.dmChannel.user_1.username
        }
        return(
            <div className="dm-messages">
                <div className="dm-user-name">
                    {dm}
                </div>
                <ul className="dm-messages-ul">
                    {this.props.dmMessages.map(message => {
                        return  <li key={message.id} className="dm-messages-li">
                                    <img className="dm-message-logo" src={window.logo} />
                                    
                                    <div>
                                        <div className="dm-info">

                                           <div className="dm-name">
                                                {message.user.username}
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

                <DmMessageForm 
                    currentUserId={this.props.currentUserId}
                    user={dm}
                    createDmMessage={this.props.createDmMessage} 
                    dmChannel={this.props.dmChannel} 
                    fetchDmMessages={this.props.fetchDmMessages}
                />
            </div>
        )
    }
}

export default DmMessages