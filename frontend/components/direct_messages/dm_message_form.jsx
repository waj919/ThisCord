import React from 'react';
import consumer from '../../consumer';

class DmMessageForm extends React.Component {
    
    constructor(props){
       super(props)
       this.state = {
           body: ""
       }

       this.input = this.input.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this) 
       this.subscription = null

    }

    componentDidMount() {
        this.subscribe()
    }

    componentDidUpdate(prevProps){
        if(prevProps.dmChannel.id !== this.props.dmChannel.id){
            this.setState({ 
                body: ""
            })
            this.subscription.unsubscribe()
            this.subscribe();
        }
    }


    //TextChannel#receive({"message"=>{"body"=>"yo yo", "channel_id"=>3}})
    // [ActionCable] Broadcasting to text:Z2lkOi8vdGhpcy1jb3JkL0NoYW5uZWwvMw: {:message=>{"body"=>"yo yo", "channel_id"=>3}}
    // TextChannel transmitting {"message"=>{"body"=>"yo yo", "channel_id"=>3}} (via streamed from text:Z2lkOi8vdGhpcy1jb3JkL0NoYW5uZWwvMw)
    // TextChannel transmitting {"message"=>{"body"=>"yo yo", "channel_id"=>3}} (via streamed from text:Z2lkOi8vdGhpcy1jb3JkL0NoYW5uZWwvMw)
    componentWillUnmount() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }

    subscribe() {
        const dmChannelId = this.props.dmChannel.id
        this.subscription = consumer.subscriptions.create(
          { channel: 'DirectMessageChannel', id: dmChannelId },
          {
            received: data => {
                this.props.createDmMessage(data.message)
            },
          }
        )
    }

    
    handleSubmit(e){
        e.preventDefault();
        this.subscription.send({
            message: {
                body: this.state.body,
                dm_channel_id: this.props.dmChannel.id
            }
        })
        this.setState({
            body: ""
        })
    }


    input(e){
    e.preventDefault();
    this.setState({
        body: e.currentTarget.value
    })
}

    render(){
       return(
        <div className="message-form">
        <form onSubmit={this.handleSubmit}>
            <input  type="text" 
                    className="direct-message-input" 
                    value={this.state.body} 
                    onChange={this.input} />
            <button type="submit" id="message-input-button">Submit</button>
        </form>

    </div>
       )

   }
}

export default DmMessageForm