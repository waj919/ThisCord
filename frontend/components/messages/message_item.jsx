import React from 'react';

class MessageItem extends React.Component {
    constructor(props){
        super(props)

        // this.year = this.props.message.created_at.slice(0,4)
        // this.month = this.props.message.created_at.slice(5,7)
        // this.day = this.props.message.created_at.slice(8,10)
        // this.time = this.props.message.created_at.slice(11, 16)
    }

    render(){
        return(
            <li  className="message-li">
                <div className="message-info">
                    <p className="message-name">
                        {this.props.message.sender.username} 
                    </p>
                    <p className="message-time">
                        {/* {this.month}/{this.day}/{this.year} at {this.time} */}
                    </p>
                </div>
                <div className="message-content">
                    {this.props.message.body}
                </div>
            </li>
        )
    }
}

export default MessageItem