# [ThisCord](https://thiscord-fs.herokuapp.com/#/)

ThisCord is a clone of Discord, a social website that allows a user to talk over live text. Users have the ability to create or join servers as well as create channels to message each other!

## Features

* Each users is able to direct message another user and figuring out how to get that to work while still having the "/@me" that discord has and getting the direct messages to appear was a challenge. My solution to this was creating a new table in my database just for direct message channels. This way I could still have the "/@me" without having any unecessary id's in my url path. Each direct message channel is a channel on its own and does not have any server id associated with it.

```js
<Switch>
  <ProtectedRoute exact path="/channel/@me/:dmChannelId" component={ServerIndexContainer}/>
  <ProtectedRoute exact path="/channel/:serverId/:channelId" component={ServerIndexContainer}/>
  <ProtectedRoute exact path="/channel/:serverId" component={ServerIndexContainer}/>
  <ProtectedRoute exact path="/channel/@me" component={ServerIndexContainer}/>
</Switch>

```

* Another challenge that I had encountered was getting live chat to work. ActionCable was confusing at first but once I figured out how to implement it, it was a very joyous moment for me. Essentially, when you enter a text channel, you 'subscribe' to that text channel and that text channel is listening on a stream for any updates and will update live if anyone messages the chat.


```js
class MessageForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = this.input.bind(this)

        this.subscription = null
    }

    componentDidMount() {
        this.subscribe()
    }

    componentDidUpdate(prevProps){
        if(prevProps.channelId !== this.props.channelId){
            this.subscription.unsubscribe()
            this.subscribe();
        }
    }

    componentWillUnmount() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
    }

 

    subscribe() {
        const channelId = this.props.channelId
        this.subscription = consumer.subscriptions.create(
          { channel: 'TextChannel', id: channelId },
          {
            received: data => {
                this.props.createMessage(data.message)
            },
          }
        )
    }


```


## Technologies
* WebSockets via ActionCable
* HTML
* SCSS
* JavaScript
* React
* Redux
* JSX
* PostgreSQL
* Ruby on Rails

## Bonus Features
* Editing messages the way Discord has the edit feature
* Creating Invite codes for servers for people to join by
