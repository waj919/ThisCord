import React from 'react';
import { Link } from "react-router-dom" 


class ChannelsIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
               <Link className="channel-link" to={`/channel/${this.props.channel.server_id}/${this.props.channel.id}`}> 
                    <div className="hashtag">
                        &#35;          
                    </div>
                    <div className="channel-name">
                        {this.props.channel.name}
                    </div>
                </Link>
        )
    }
}

export default ChannelsIndexItem