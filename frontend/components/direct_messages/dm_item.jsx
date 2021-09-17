import React from 'react';
import {Link} from "react-router-dom"

class DmItem extends React.Component {

    render(){
        
        return(
            <li className="dm-channels">
                <img src={window.logo} className="dm-logo" />
                <Link className="dm-link" to={`/channel/@me/${this.props.dmChannel.id}`}>
                    {this.props.dmChannel.user_1.username}
                </Link>
            </li>
        )
    }
}

export default DmItem