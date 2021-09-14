import React from 'react';
import { Link } from "react-router-dom"


class ServerIndexItem extends React.Component {
    constructor(props){
        super(props)
    }





    render(){
    
        return(
            <li>
                <button className="server-buttons" >
                    <Link id="server-links" to={`/channel/${this.props.server.id}`}>
                        {this.props.server.name[0]}
                    </Link>
                </button>
            </li>
        )
    }

}

export default ServerIndexItem