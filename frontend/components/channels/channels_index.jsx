import React from 'react';
import ChannelsIndexItem from './channels_index_item';


class ChannelsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            showModal: false
        }
    }

    render(){
        if (this.props.server === undefined){ return null}
      
        return(
            <div>
                <ul>
                    {this.props.server.channels.map(channel => {
                        return <li key={channel.id}>
                                    <ChannelsIndexItem 
                                        key={channel.id} 
                                        channel={channel}
                                    />
                                </li>
                    })} 
                </ul>
            </div>
                 
        )
    }
    
}

export default ChannelsIndex