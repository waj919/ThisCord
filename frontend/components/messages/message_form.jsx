import React from 'react';
import consumer from "../../consumer"

class MessageForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = this.input.bind(this)

        this.subscription = null
    }

    componentDidMount() {
        this.subscribe()
    }

    componentDidUpdate(prevProps){
        if(prevProps.channelId !== this.props.channelId){
            this.subscription.unsubscribe()
            this.subscribe();
        }
    }

    componentWillUnmount() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }

 

    subscribe() {
        const channelId = this.props.channelId  

        this.subscription = consumer.subscriptions.create(
          { channel: 'TextChannel', id: channelId },
          {
            received: data => {
                // this.props.createMessage(data.message)
                this.props.fetchMessages(this.props.channelId)
               
            }
          }
        )
    }

   input(e){
        e.preventDefault();
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.subscription.send({
            message: {
                body: this.state.body,
                channel_id: this.props.channelId,
                sender_id: this.props.currentUserId
            }
        })
        
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
                            placeholder={`Message #${this.props.channelName}`}
                            value={this.state.body} 
                            onChange={this.input} />
                    <button type="submit" id="message-input-button">Submit</button>
                </form>

            </div>
        )
    }
}

export default MessageForm