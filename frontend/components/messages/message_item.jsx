import React from 'react';

class MessageItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li  className="message-li">
                <div className="chat">
                    <img src={window.logo} alt="" />
                    <div>
                        <div className="message-info">
                            <p className="message-name">
                                {this.props.message.sender.username} 
                            </p>
                            <p className="message-time">
                            {this.props.message.created_at.slice(5,7)}/
                            {this.props.message.created_at.slice(8,10)}/
                            {this.props.message.created_at.slice(0,4)} at &nbsp;
                            {this.props.message.created_at.slice(11, 16)}

                            </p>
                        </div>
                        <div className="message-content">
                            {this.props.message.body}
                        </div> 

                    </div>
                </div>
            </li>
        )
    }
}

export default MessageItem