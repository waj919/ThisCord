import React from 'react';
import { Link } from "react-router-dom" 
import MessageIndex from '../messages/messages_index';
import { CSSTransition } from "react-transition-group"


class ChannelsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name: "",
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.input = this.input.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
       
    }

    handleDelete(){
        this.props.deleteChannel(this.props.channel.id)
        this.setState({
            name: "",
            show: false
        })
    }


    input(e){
        e.preventDefault()
    
        this.setState({
            name: e.currentTarget.value
        })
    }
    showModal(){
        let next = !this.state.show
        this.setState({
            show: next
        })
    }

    handleSubmit(){
        let channel = {
            id: this.props.channel.id,
            name: this.state.name
        }
        this.props.updateChannel(channel)
        this.setState({
            name: "",
            show: false
        })
    }
    



    render(){
        return(
            <div>
               <Link className="channel-link" to={`/channel/${this.props.channel.server_id}/${this.props.channel.id}`}> 
                    <div className="hashtag">
                        &#35;          
                    </div>
                    <div className="channel-name">
                        {this.props.channel.name}
                    </div>
                    <i onClick={this.showModal} className="channel-cog fas fa-cog"></i>
                     
                </Link>
                
                <CSSTransition in={this.state.show} timeout={500} classNames="show-edit" unmountOnExit>
                    <div className={this.state.show ? "channel-modal show" : "channel-modal hide"}>

                
                        <form onSubmit={this.handleSubmit} className="channel-modal-edit " >
                                <div className="edit-header">
                                
                                <h1 className="edit-label">Edit Channel Name</h1>
                                    
                                    <h1 className="edit-close-button" onClick={this.showModal}>
                                        &times;
                                    </h1>
                                </div>
                                <input className="edit-input" type="text" onChange={this.input}/>
                            
                                <br />
                                <input type="submit" className="edit-button" value="Edit Channel" />
                        </form>
                        
                        <button onClick={this.handleDelete} className="delete-button">Delete Channel</button>
                            
                    </div>
                </CSSTransition>
               

            </div>
        )
    }
}

export default ChannelsIndexItem