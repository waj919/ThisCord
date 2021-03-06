import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from "react-router-dom"
import ChannelsIndex from '../channels/channels_index';
import MessageIndex from '../messages/messages_index';
import DmIndex from '../direct_messages/dm_index';
import DmMessages from '../direct_messages/dm_messages';
import { CSSTransition } from "react-transition-group"

class ServerIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false,
            joinShow: false,
            name: "",
            allServers: [], 
            value: "Please Select a Server"
        }
        
        
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.input = this.input.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleJoinSubmit = this.handleJoinSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    showModal = () => {
        this.setState({ show: true });
    }
    
    hideModal = () => {
        this.setState({ show: false });
    }
    
    showJoinModal = () => {
        this.setState({ joinShow: true });
    }
    
    hideJoinModal = () => {
        this.setState({ joinShow: false });

    }

    componentDidMount(){
        this.props.fetchAllUsers()
        this.props.fetchDmChannels()
        this.props.fetchUserServers(this.props.currentUserId)
        if(this.props.channelId) {
            this.props.fetchMessages(this.props.channelId)
        }
        if(this.props.dmChannelId){
            this.props.fetchDmMessages(this.props.dmChannelId)
        }
        this.setState({
            allServers: this.props.fetchServers()
        })
        
    }

    componentDidUpdate(prevProps){
        if (Number.isNaN(this.props.channelId)){}
        else if(prevProps.channelId !== this.props.channelId){
            this.props.fetchMessages(this.props.channelId)
        }
    }
    
    input(e){
        e.preventDefault()
        this.setState({
            name: e.currentTarget.value
        })
    }
    
    handleSubmit(e){
        let server = {
            name: this.state.name,
        }
        this.props.createServer(server)
        this.setState({
            name: "",
            show: false
        })
        this.props.fetchUserServers(this.props.currentUserId)

    }

    handleChange(e){
        this.setState({
            value: e.currentTarget.value
        })
    }

    handleJoinSubmit(e){
        let allServers = this.state.allServers.responseJSON
        this.props.createUserServer(this.state.value)
        this.props.fetchUserServers(this.props.currentUserId)
        this.props.history.push(`/channel/${this.state.value}/${allServers[allServers.findIndex(ele => ele.id === parseInt(this.state.value))].servers[0].id}`)
        this.setState({
            joinShow: false
        })
    }


    render(){
        let join;
        let all = this.state.allServers.responseJSON
        if(!this.props.servers) return null;        
        if(all !== undefined) {
            let notJoined = []
            let count = 0;
            all.forEach(server => {
                
                for (let i = 0; i <= this.props.servers.length - 1; i++) {
                    if(this.props.servers[i].id === server.id){
                        count++;
                    }
                }
                if(count !== 1){
                    notJoined.push(server)
                } 
                count = 0;
            
            })
            join = 
            <div className= { this.state.joinShow ? "server-modal show" : "server-modal hide"}>
                <CSSTransition in={this.state.joinShow} timeout={700} classNames="show-join" unmountOnExit>
                    <form className="server-modal-join" onSubmit={this.handleJoinSubmit}>
                        <div className="server-header">
                            <p className="server-label">Join a Server!</p>

                            <p className="close-button" onClick={this.hideJoinModal}>
                                &times;
                            </p>
                        </div>
                        <select id="dropdown" value={this.state.value} onChange={this.handleChange}>
                            <option value="" >Select your option</option>
                            {notJoined.map((server) => {
                                return <option key={server.id} value={server.id}>{server.name}</option>
                            })}
                        </select>
                        <br />
                        <input id="join-button" type="submit" value="Join Server"/>
                    </form>
                </CSSTransition>

            </div>
        } else {
            join = null;
        }
       

        return(
            <div className="container">
                <ul id="server-index">

                    <li className="me">
                        <button className="server-buttons">
                            <Link  to="/channel/@me">
                                <i className="fab fa-discord"></i>
                            </Link>
                        </button>
                    </li>
                    {this.props.servers.map(server => {
                        return <ServerIndexItem key={server.id} server={server} />
                                
                    })}
                    <li>
                        <div className={this.state.show ? "server-modal show" : "server-modal hide"}>
                        <CSSTransition in={this.state.show} timeout={700} classNames="show-create" unmountOnExit>
                            <form className="server-modal-main" onSubmit={this.handleSubmit}>
                                <div className="server-header">
                                    <h1 className="server-label">Create a Server</h1>
                                    
                                    <h1 className="close-button" onClick={this.hideModal}>
                                        &times;
                                    </h1>
                                </div>

                                <p>
                                    Your server is where you and your friends hang out.Make yours and start talking.
                                </p>
                                <input id="server-input" type="text" onChange={this.input} maxLength="50"/>
                            
                                <br />
                                <button className="create-button" disabled={(this.state.name.length <= 0) ? true : false }> Create Server</button>
                            </form>
                        </CSSTransition >
                        </div>
                        <button className="server-buttons server-plus" onClick={this.showModal}> + </button>
                    </li>
                    <li id="log-out">
                        <button className="server-buttons logout-button" onClick={() => this.props.logout()}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </li>

                    <li>
                        {join}
                        <button className="server-buttons join" onClick={this.showJoinModal}>
                            Join
                        </button>
                    </li>
                </ul>

                
                <ChannelsIndex 
                    server={this.props.server} 
                    createChannel={this.props.createChannel} 
                    updateServer={this.props.updateServer}
                    removeServer={this.props.removeServer}
                    history={this.props.history}
                    leaveServer={this.props.leaveServer}
                    name={this.props.username}
                    updateChannel={this.props.updateChannel}
                    deleteChannel={this.props.deleteChannel}
                    fetchMessages={this.props.fetchMessages}
                    channelId={this.props.channelId}
                    fetchUserServers={this.props.fetchUserServers}
                    currentUserId={this.props.currentUserId}
                    createDmChannel={this.props.createDmChannel}
                    fetchDmChannels={this.props.fetchDmChannels}
                    dmChannels={this.props.dmChannels}
                    fetchDmMessages={this.props.fetchDmMessages}


                />

                <MessageIndex 
                    messages={this.props.messages} 
                    username={this.props.username} 
                    channelId={this.props.channelId} 
                    createMessage={this.props.createMessage}
                    server={this.props.server}
                    deleteMessage={this.props.deleteMessage}
                    updateMessage={this.props.updateMessage}
                    currentUserId={this.props.currentUserId}
                    fetchMessages={this.props.fetchMessages}
                />

                <DmIndex 
                    username={this.props.username}
                    path={this.props.path}
                    dmChannels={this.props.dmChannels} 
                    fetchDmChannels={this.props.fetchDmChannels} 
                    path={this.props.path}
                    users={this.props.users}
                    currentUserId={this.props.currentUserId}
                    createDmChannel={this.props.createDmChannel}
                    fetchUserServers={this.props.fetchUserServers}
                    dmChannelId={this.props.dmChannelId}
                    fetchDmMessages={this.props.fetchDmMessages}
                    history={this.props.history}
                />

                <DmMessages 
                    dmChannel={this.props.dmChannel} 
                    currentUserId={this.props.currentUserId}
                    createDmMessage={this.props.createDmMessage}
                    fetchDmMessages={this.props.fetchDmMessages}
                    dmMessages={this.props.dmMessages}
                    match={this.props.match}
                    dmChannelId={this.props.dmChannelId}
                />

            </div>


                
        )
    }
}

export default ServerIndex