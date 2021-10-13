import React from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <main id="splash">
                    <div className='splash-nav'>
                        <div className='splash-nav-logo'> 
                            ThisCord 
                        </div>
                        <div className='splash-nav-links'>
                            <div className="live-links">
                                <i className="fab fa-github logo"></i>
                                <a href="https://github.com/waj919/ThisCord"  target="_blank" rel="noopener noreferrer" id="github">
                                    GitHub
                                </a>
                            </div>
                            <div className="live-links">
                                <i className="fab fa-linkedin logo"></i>
                                <a href="https://www.linkedin.com/in/wajahat-shoukat/"  target="_blank" rel="noopener noreferrer" id="linkedin">
                                LinkedIn
                                </a>
                            </div>
                            <div className="live-links">
                                <i className="fab fa-angellist logo"></i>
                                <a href="https://angel.co/u/wajahat-shoukat"  target="_blank" rel="noopener noreferrer" id="angellist">
                                    AngelList
                                </a>
                            </div>
                        </div>
                        <button className='splash-login' onClick={()=> this.props.history.push('/login')}> Login </button>
                    </div>

                    <section className="headline">
                        <p id="headline-title">IMAGINE A PLACE...</p>
                        <p id="headline-content">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                    </section>
                    {/* <img id="clouds" src={window.clouds} alt="clouds" /> */}
                    <div id="cartoons">
                        <img id="cartoon-left" src={window.cartoon_left} alt="cartoon_left" />
                        <img id="cartoon-right" src={window.cartoon_right} alt="cartoon_right" />
                    </div>
                </main>

                <section id="splash-1" >
                    <img id="splash-img-1" src={window.splash_img1} alt="splash" />
                    <div id="content-1">
                        <p id="content-1-header">Create an invite-only place where you belong</p>
                        <p id="content-1-body">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                    </div>

                </section>

                <section id="splash-2">
                    <div id="content-2">
                        <p id="content-2-header">Where hanging out is easy</p>
                        <p id="content-2-body">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                    </div>
                    <img id="splash-img-2"src={window.splash_img2} alt="splash2" />
                
                </section>

                <section id="splash-3" >
                    <img id="splash-img-3" src={window.splash_img3} alt="splash3" />
                    <div id="content-3">
                        <p id="content-3-header">Create an invite-only place where you belong</p>
                        <p id="content-3-body">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                    </div>
                </section>

                <section id="splash-4">
                    <div id="content-4">
                        <p id="content-4-header">RELIABLE TECH FOR STAYING CLOSE</p>
                        <p id="content-4-body">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share. </p>
                    </div>

                    <img id="splash-img-4" src={window.splash_img4} alt="splash4" />

                    <img id="sparkles" src={window.sparkles} alt="" />
                    <p id="ready">Ready to start your journey?</p>

                </section>

                <footer id="splash-footer">
                    <p>
                        ThisCord
                    </p>
                    <button id="splash-signup"onClick={ () => this.props.history.push("/signup")}>
                        Sign Up
                    </button>
                </footer>

            </div>

        )
    }
}

export default Splash