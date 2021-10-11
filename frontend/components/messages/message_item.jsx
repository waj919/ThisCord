import React from 'react';

class MessageItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            body: this.props.message.body
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.input = this.input.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.showModal = this.showModal.bind(this)
        
    }

    input(e){
        e.preventDefault();
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleDelete(){
        this.props.deleteMessage(this.props.message.id)
    }
    
    showModal(){
        let next = !this.state.show
        this.setState({
            show: next
        })
    }

    handleUpdate(){
        let message = {
            id: this.props.message.id,
            body: this.state.body
        }
        this.props.updateMessage(message)
        this.setState({
            show: false
        })
    }

    render(){
        let remove;
        if(this.props.message.sender.id === this.props.currentUserId){
            remove =  <i onClick={this.handleDelete} className="fas fa-trash-alt trash"></i>
        } else {
            remove = null
        }
        return(
            <li  className="message-li" key={this.props.message.id}>
                  
                  <div>
                    <div className="chat">
                        <img src={window.logo} alt="" />
                        <div>
                            <div className="message-info">
                                <p className="message-name">
                                    {this.props.message.sender.username} 
                                </p>
                                <p className="message-time">
                                {this.props.message.created_at.slice(5,7)}/
                                {this.props.message.created_at.slice(8,10)}/
                                {this.props.message.created_at.slice(0,4)} at &nbsp;
                                {this.props.message.created_at.slice(11, 16)}

                                </p>
                            </div>
                            <div className="message-content">
                                {this.props.message.body}
                            </div> 

                        </div>
                    </div>
                    {/* <i onClick={this.showModal}className="far fa-edit"></i> */}
                
                    <form onSubmit={this.handleUpdate} className={ this.state.show ? "edit-message-show" : "edit-message-hide"}>
                        <input className="edit-message-input" type="text" value={this.state.body} onChange={this.input} />
                        <div className="edit-enter">
                            <div className="enter-to">enter to &nbsp;</div>
                            <div className="save">save</div>
                        </div>
                    </form>
                                

                </div>
                {remove}
            </li>
        )
    }
}

export default MessageItem