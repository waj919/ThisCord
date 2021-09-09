import React from 'react';

class ServerForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        this.input = this.input.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    input(e){
        e.preventDefault()
        this.setState({
            name: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        let server = {
            name: this.state.name,
        }
        this.props.addServer(server)
        
    }
    
    render(){
        let displayProp = this.props.show ? "server-modal show" : "server-modal hide";

        return (
            <div className={displayProp}>
                <form className="server-modal-main" onSubmit={this.handleSubmit}>
                    <label >SERVER NAME
                        <br />
                        <input type="text" onChange={this.input}/>
                    </label>
                    <input type="submit" value="Create Server" />

                    <button onClick={this.props.closeModal}>
                        Close
                    </button>
                </form>
            </div>
        )
    }
}

export default ServerForm