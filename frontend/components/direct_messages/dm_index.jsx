import React from 'react';
import DmItem from './dm_item';


class DmIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false,
            value: ""
        }
        // this.user = this.props.dmChannel
        this.showModal = this.showModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    showModal(){
        let next = !this.state.show
        this.setState({
            show: next
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

                <div className={this.state.show ? "show" : "hide"} >

                    <form className="server-modal-main" onSubmit={this.handleSubmit}>
                                <div className="server-header">
                                    <h1 className="server-label">Create a Server</h1>
                                    
                                    <h1 className="close-button" onClick={this.showModal}>
                                        &times;
                                    </h1>
                                </div>
                        <select id="dropdown" value={this.state.value} onChange={this.handleChange}>
                            <option value="" >Select your option</option>
                            {this.props.users.map(user => {
                                return <option key={user.id} value={user.id}>{user.username}</option>
                            })}
                        </select>
                        <button>Chat</button>
                    </form>


                </div>
               
                <ul className="dm-channels-ul">

                    {this.props.dmChannels.map(dmChannel => {
                      return <DmItem                
                                key={dmChannel.id}
                                dmChannel={dmChannel}
                                messages={dmChannel.messages}
                            />
                    })}
                </ul>
            </div>
        )
    }
}

export default DmIndex;