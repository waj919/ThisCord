import React from 'react';
import DmItem from './dm_item';


class DmIndex extends React.Component {

    constructor(props){
        super(props)

        this.user = this.props.dmChannel
        
    }

    // componentDidMount(){
    //     this.props.fetchDmChannels()
    // }
    

    render(){
        if(!this.props.path.includes("@")) return null
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