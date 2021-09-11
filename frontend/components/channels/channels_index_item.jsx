import React from 'react';
import { Link } from "react-router-dom" 


class ChannelsIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
               <Link to={`/channels/${this.props.channel.server_id}/${this.props.channel.id}`}> 
                    {this.props.channel.name}
                </Link>
        )
    }
}

export default ChannelsIndexItem