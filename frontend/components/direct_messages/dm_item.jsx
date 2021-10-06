import React from 'react';
import {Link} from "react-router-dom"

class DmItem extends React.Component {

    render(){
        let name = ""
        if (this.props.currentUserId === this.props.dmChannel.user_1.id){
            name = this.props.dmChannel.user_2.username
        } else {
            name = this.props.dmChannel.user_1.username
        }
        return(
            <div className='dm-channels'>
                <img src={window.logo} className="dm-logo" />
                <Link className="dm-link" to={`/channel/@me/${this.props.dmChannel.id}`}>
                    {name}
                </Link>
            </div>
        )
    }
}

export default DmItem