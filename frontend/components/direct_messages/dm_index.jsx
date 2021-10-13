import React from 'react';
import DmItem from './dm_item';


class DmIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false,
            dmExist: false,
            value: ""
        }
        this.showModal = this.showModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUserId)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.dmChannels.length != this.props.dmChannels.length){
            this.props.fetchDmChannels();
            // this.props.history.push(`/channel/@me/${this.props.dmChannels[this.props.dmChannels.length-1].id}`)
        }
        
    }

    showModal(){
        let next = !this.state.show
        this.setState({
            show: next,
            dmExist: false,
            value: ""

        })
    }

    handleChange(e){
        this.setState({
            value: e.currentTarget.value
        })
    }

    handleSubmit(e){
        let dmChannel = {
            user1_id: this.props.currentUserId,
            user2_id: this.state.value
        }
        this.props.createDmChannel(dmChannel)
        this.setState({
            show: false,
            dmExist: false,
            value: ""
        })
    }
    

    render(){
        if(!this.props.path.includes("@")) return null
        if(!this.props.users) return null
        return (
    
            <div className="dms">
                <div className="dm-messages-name">
                    <div>
                        {this.props.username}
                    </div>
                </div>
                
                <div className="direct-message-text">
                    DIRECT MESSAGES
                </div>
                <div className="dm-plus" onClick={this.showModal}>
                    +
                </div>

                <div className={this.state.show ? "server-modal show" : "server-modal hide"} >

                    <form className="dm-modal-main" onSubmit={this.handleSubmit}>
                                <div className="server-header">
                                    <h1 className="dm-label">Chat with a Friend</h1>
                                    
                                    <h1 className="dm-close-button" onClick={this.showModal}>
                                        &times;
                                    </h1>
                                </div>
                                <div className="dm-content">
                                    Chat with a friend privately!!
                                </div>
                                <div className={this.state.dmExist ? "error show" : "error hide"}>
                                    User DM exists already!
                                </div>
                        <select className="dm-dropdown" value={this.state.value} onChange={this.handleChange}>
                            <option value="" >Choose a Friend!</option>
                            {this.props.users.map(user => {
                                if(user.username != this.props.username) {
                                    return <option key={user.id} value={user.id}>{user.username}</option>
                                }
                            })}
                        </select>
                        <button className="dm-button">Chat</button>
                    </form>


                </div>
               
                <ul className="dm-channels-ul">

                    {this.props.dmChannels.map(dmChannel => {
                        
                        if(dmChannel.user_1.id === this.props.currentUserId || dmChannel.user_2.id === this.props.currentUserId){
                            return <li key={dmChannel.id.toString()}>
                                        <DmItem                
                                        dmChannel={dmChannel}
                                        messages={dmChannel.messages}
                                        currentUserId={this.props.currentUserId}
                                        />
                                    </li>
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default DmIndex;