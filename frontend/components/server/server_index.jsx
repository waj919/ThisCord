import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from "react-router-dom"

class ServerIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false,
            name: ""
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.input = this.input.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    showModal = () => {
        this.setState({ show: true });
    }
    
    hideModal = () => {
        this.setState({ show: false });
    }
    

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUserId)
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



    render(){
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
                        return <ServerIndexItem key={server.id} server={server} />
                    })}
                    <li>
                        <div className={this.state.show ? "server-modal show" : "server-modal hide"}>
                            <form className="server-modal-main" onSubmit={this.handleSubmit}>
                                <div id="server-header">
                                    <h1 id="server-label">Create a Server</h1>
                                    
                                    <h1 id="close-button" onClick={this.hideModal}>
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
                </ul>
            </div>
        )
    }
}

export default ServerIndex