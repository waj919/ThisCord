import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from "react-router-dom"
import ChannelsIndexContainer from '../channels/channels_index_container';
import ChannelsIndex from '../channels/channels_index';

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
        
        // console.log(this.props.allServers);     
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
        this.props.fetchUserServers(this.props.currentUserId)
        this.setState({
            allServers: this.props.fetchServers()
        })
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
            show: false
        })
    }

    handleChange(e){
        this.setState({
            value: e.currentTarget.value
        })
    }

    handleJoinSubmit(e){
        this.props.createUserServer(this.state.value)
        this.setState({
            joinShow: false
        })
    }


    render(){
        let join;
        let all = this.state.allServers.responseJSON
        if(all !== undefined) {
            join = 
            <div className= { this.state.joinShow ? "server-modal show" : "server-modal hide"}>
                <form className="server-modal-join" onSubmit={this.handleJoinSubmit}>
                    <div className="server-header">
                        <p className="server-label">Join a Server!</p>

                        <p className="close-button" onClick={this.hideJoinModal}>
                            &times;
                        </p>
                    </div>
                    <select id="dropdown" value={this.state.value} onChange={this.handleChange}>
                        <option value="" >Select your option</option>
                        {all.map(server => {
                            return <option key={server.id} value={server.id}>{server.name}</option>
                        })}
                    </select>
                    <br />
                    <input id="join-button" type="submit" value="Join Server"/>
                </form>


            </div>
        } else {
            join = null;
        }
        return(
            <div>
                <ul id="server-index">

                    <li>
                        <button className="server-buttons">
                            <Link  to="/channel/@me">
                                <i className="fab fa-discord"></i>
                            </Link>
                        </button>
                    </li>
                    {this.props.servers.map(server => {
                        return <div>
                                    <ServerIndexItem key={server.id} server={server} />
                                </div>
                    })}
                    <li>
                        <div className={this.state.show ? "server-modal show" : "server-modal hide"}>
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
                                <input id="server-input" type="text" onChange={this.input}/>
                            
                                <br />
                                <input id="create-button" type="submit" value="Create Server" />
                            </form>
                        </div>
                        <button className="server-buttons" onClick={this.showModal}> + </button>
                    </li>
                    <li>
                        <button className="server-buttons logout-button" onClick={() => this.props.logout()}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </li>

                    <li>
                        {join}
                        <button className="server-buttons" onClick={this.showJoinModal}>
                            Join
                        </button>
                    </li>
                </ul>
                
                <ChannelsIndex server={this.props.server} />
            </div>
                
        )
    }
}

export default ServerIndex