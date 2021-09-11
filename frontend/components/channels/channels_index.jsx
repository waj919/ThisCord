import React from 'react';
import ChannelsIndexItem from './channels_index_item';


class ChannelsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            channelShow: false
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.input = this.input.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    showModal = () => {
        this.setState({ channelShow: true });
    }
    
    hideModal = () => {
        this.setState({ channelShow: false });
    }

    input(e){
        e.preventDefault()
        this.setState({
            name: e.currentTarget.value
        })
    }

    handleSubmit(e){
        let channel = {
            server_id: this.props.server.id,
            name: this.state.name,
        }
        this.props.createChannel(channel)
        this.props.updateServer(this.props.server)
        this.setState({
            channelShow: false
        })
    }

    render(){
        if (this.props.server === undefined){ return null}
      
        return(
            <div id="channels-index">
                <p className="channel-server-name">{this.props.server.name}</p>

                <br />
                
                <div id="channel-header">
                    <p id="text-channel">TEXT CHANNELS</p>
                    <p onClick={this.showModal} id="plus">&#43;</p>
                </div>
                <ul id="channels-list">
                    {this.props.server.channels.map(channel => {
                        return <li className="channel-li" key={channel.id}>
                                    <ChannelsIndexItem  
                                        channel={channel}
                                    />
                                </li>
                    })} 
                </ul>
                <div className={this.state.channelShow ? "channel-modal show" : "channel-modal hide"}>
                            <form className="channel-modal-main" onSubmit={this.handleSubmit}>
                                <div className="channel-header">
                                    <h1 className="channel-label">Create a Channel</h1>
                                    
                                    <h1 className="close-button" onClick={this.hideModal}>
                                        &times;
                                    </h1>
                                </div>

                                <p>
                                    Your channel is where you and your friends hang out.Make yours and start talking.
                                </p>
                                <input id="channel-input" type="text" onChange={this.input}/>
                            
                                <br />
                                <input id="create-button" type="submit" value="Create Channel" />
                            </form>
                </div>
            </div>
                 
        )
    }
    
}

export default ChannelsIndex