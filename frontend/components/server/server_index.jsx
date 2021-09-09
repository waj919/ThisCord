import React from 'react';
import ServerIndexItem from './server_index_item';
import ServerForm from "./server_form"

class ServerIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)

    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUserId)
    }

    handleClick(){
        return null
    }


    render(){
        return(
            <div>
                <ul id="server-index">
                    {this.props.servers.map(server => {
                        return <ServerIndexItem key={server.id} server={server} />
                    })}
                    <li>
                        <ServerForm 
                            show={this.state.show} 
                            closeModal={this.hideModal}
                            addServer={this.props.createServer}
                            />
                        <button className="server-buttons" onClick={this.showModal}> + </button>
                    </li>
                    <li>
                        <button onClick={() => this.props.logout()}>Log Out</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ServerIndex