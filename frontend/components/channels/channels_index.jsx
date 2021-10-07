import React from 'react';
import ChannelsIndexItem from './channels_index_item';
import { CSSTransition } from "react-transition-group"


class ChannelsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            confirmName: "",
            channelShow: false,
            show: false,
            serverSettings: false,
            confirm: false,
            error: false,
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
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUserId)
    }
    

    leaveServer(){
        this.props.leaveServer(this.props.server.id)
        this.props.history.push('/channel/@me')
        this.props.fetchUserServers(this.props.currentUserId)
        this.serverSettings();
    }

    handleClick(e){
        this.setState({
            confirm: !(this.state.confirm),
            error: false
        })
    }

    deleteServer(){
        if(this.state.confirmName === this.props.server.name){
            this.props.removeServer(this.props.server.id)
            this.props.fetchUserServers(this.props.currentUserId)
            this.props.history.push('/channel/@me')
            this.serverSettings();
        } else {
            this.setState({
                error: true
            })
        }
       
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
            serverSettings: action,
            confirmName: "",
            error: false,
            confirm: false
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

    input(field){
        return e => {
            e.preventDefault()
            this.setState({
                [field]: e.currentTarget.value
            })
            
        }
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

                <div className={this.state.confirm ? "confirm-modal show" : "channel-modal hide"}>
                    <CSSTransition in={this.state.confirm} timeout={500} classNames="show-channel" unmountOnExit>
                    <div className="confirm-modal-main">
                        <form onSubmit={this.deleteServer} >
                                <p className="confirm-delete">Delete '{this.props.server.name}' ?</p>
                                <p className="confirm-message">Are you sure you want to delete <span>{this.props.server.name}</span>? This action cannot be undone. </p>
                                <label>ENTER SERVER NAME</label>
                                <input type="text" value={this.state.confirmName} onChange={this.input('confirmName')}/>
                                <p className={this.state.error ? "confirm-error show" : "confirm-error hide"}>You didn't enter the server name correctly</p>
                                <button className="confirm-button">Delete Server</button>
                            </form>
                            
                            <div className="confirm-cancel" onClick={this.handleClick}>Cancel</div>
                            
                        </div> 
                    </CSSTransition>
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
                                    <li className={this.props.server.creator_id === this.props.currentUserId ? "show" : "hide"} onClick={this.handleClick}>
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
                                            <input type="text" value={this.state.name} onChange={this.input('name')} />
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
                        return <li key={channel.name} className="channel-li" >
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
                                    <input id="channel-input" placeholder="new-channel" type="text" onChange={this.input('name')}/>
                                
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