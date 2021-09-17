import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { CSSTransition } from "react-transition-group"


class ChannelsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            channelShow: false,
            show: false,
            serverSettings: false
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.input = this.input.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.serverSettingsDropdown = this.serverSettingsDropdown.bind(this)
        this.serverSettings = this.serverSettings.bind(this)
        this.deleteServer = this.deleteServer.bind(this)
        this.leaveServer = this.leaveServer.bind(this)
    }

   
 

    leaveServer(){
        this.props.leaveServer(this.props.server.id)
        this.props.history.push('channel/@me')
        this.serverSettings();
    }

    deleteServer(){
        this.props.removeServer(this.props.server.id)
        this.props.history.push('channel/@me')
        this.serverSettings();
    }

    serverSettingsDropdown(){
    const action = !this.state.show;
        this.setState({
            show: action
        })
    }
    
    serverSettings(){
        const action = !this.state.serverSettings;
            this.setState({
                show: false,
                serverSettings: action
            })
        }

    showModal = () => {
        this.setState({ channelShow: true });
    }
    
    hideModal = () => {
        this.setState({ 
            name: "",
            channelShow: false
        });
    }

    input(e){
        e.preventDefault()
        this.setState({
            name: e.currentTarget.value
        })
    }

    handleUpdate(e){
        let server = {
            name: this.state.name,
            id: this.props.server.id
        }
        this.props.updateServer(server)
        this.serverSettings();
    }


    handleSubmit(e){
        let channel = {
            server_id: this.props.server.id,
            name: this.state.name
        }
        this.props.updateServer(this.props.server)
        this.props.createChannel(channel)
        this.setState({
            name: "",
            channelShow: false
        })
    }


    render(){
        if (this.props.server === undefined){ return null}
        return(
            <div id="channels-index">
                
                <div id="server-name">
                    <p className="channel-server-name">
                        {this.props.server.name}
                    </p>
                    <div id="server-dropdown"  onClick={this.serverSettingsDropdown} >
                        <i className="fas fa-chevron-down"></i>
                        <ul id="dropdown-list" onClick={this.serverSettings} className={this.state.show ? "showSettings" : "hide"} >
                            <li>Server Settings </li>
                            <i className="fas fa-cog"></i>
                        </ul>
                    </div>

                   
             
                </div>

                <CSSTransition in={this.state.serverSettings} timeout={500} classNames="show-channel" unmountOnExit>
                    <div id="server-settings" className="grid">
                            <div id="left-container">
                                <div id="server-settings-name">
                                    {this.props.server.name}
                                </div>
                                <ul id="settings-ul">
                                    <li>
                                        Overview
                                    </li>
                                    <li onClick={this.leaveServer}>
                                        Leave Server
                                    </li>
                                    <li onClick={this.deleteServer}>
                                        Delete Server
                                    </li>
                                </ul>
                            </div>
                            <div id="right-container">
                                    <form onSubmit={this.handleUpdate} id="server-settings-form">
                                        <div>
                                            <label>
                                                EDIT SERVER
                                            </label>
                                            <div className="server-close-button" onClick={this.serverSettings}>
                                                &times;
                                            </div>
                                        </div>
                                            <input type="text" value={this.state.name} onChange={this.input} />
                                            <button id="change-button">Change Server Name</button>
                                    </form>
                            </div>
                    
                    </div>
                </CSSTransition>


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
                                            updateChannel={this.props.updateChannel}
                                            deleteChannel={this.props.deleteChannel}
                                        />
                                </li>
                    })} 
                </ul>

                <div id="channel-footer">
                    <img id="logo" src={window.logo} />
                    <h1 id="username" >{this.props.name}</h1>
                
                </div>
                <div className={this.state.channelShow ? "channel-modal show" : "channel-modal hide"}>
                        
                            <CSSTransition in={this.state.channelShow} timeout={500} classNames="show-channel" unmountOnExit>
                                <form  className="channel-modal channel-modal-main" onSubmit={this.handleSubmit}>
                                    <div className="channel-header">
                                        <h1 className="channel-label">Create a Channel</h1>
                                
                                        <h1 className="close-button" onClick={this.hideModal}>
                                            &times;
                                        </h1>
                                    </div>
                                    <p>
                                        Your channel is where you and your friends hang out.Make yours and start talking.
                                    </p>
                                    <div className="input-hashtag">
                                        &#35;
                                    </div>
                                    <input id="channel-input" placeholder="new-channel" type="text" onChange={this.input}/>
                                
                                    <br />
                                    <button className="create-button" disabled={(this.state.name.length <= 0) ? true : false}>Create Channel </button>
                                </form>
                            </CSSTransition>
                </div>

                <div className="members">
                    <div className="members-header">
                        Members
                    </div>
                    <ul className="members-ul">
                        {this.props.server.users.map(user => {
                            return  <li key={user.id} className="member-li">
                                        <img src={window.logo} className="members-logo"/>
                                        {user.username}
                                    </li>
                        })}
                    </ul>
                </div>
            </div>
                 
        )
    }
    
}

export default ChannelsIndex